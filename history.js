// Enhanced History Management for Blind XSS Manager

let allHistoryData = [];
let currentFilter = 'all';

function loadHistoryData() {
    console.log('Loading history data...');
    chrome.storage.sync.get(null, (items) => {
        console.log('Storage items:', items);
        allHistoryData = [];
        
        // Process all stored items
        for (const key in items) {
            // Skip settings keys
            if (key === 'domain' || key === 'autoSave' || key === 'payloadCount' || key === 'theme') {
                continue;
            }
            
            const item = items[key];
            console.log(`Processing key: ${key}, item:`, item);
            
            // Handle new history structure (with timestamp)
            if (key.startsWith('history_') && typeof item === 'object' && item.url && item.hash) {
                // Try to extract domain from URL
                let domain = '';
                try {
                    const urlObj = new URL(item.url);
                    domain = urlObj.hostname;
                } catch (e) {
                    domain = 'Unknown';
                }
                
                allHistoryData.push({
                    hash: item.hash,
                    url: item.url,
                    domain: domain,
                    date: item.date || new Date(item.timestamp).toLocaleString(),
                    timestamp: item.timestamp
                });
                console.log('Added new structure entry:', item);
            }
            // Handle old structure (backward compatibility)
            else if (typeof item === 'string') {
                const url = key;
                const hash = item;
                
                // Try to extract domain from URL
                let domain = '';
                try {
                    const urlObj = new URL(url);
                    domain = urlObj.hostname;
                } catch (e) {
                    domain = 'Unknown';
                }
                
                // Add timestamp for old entries
                const timestamp = Date.now();
                
                allHistoryData.push({
                    hash: hash,
                    url: url,
                    domain: domain,
                    date: new Date(timestamp).toLocaleString(),
                    timestamp: timestamp
                });
                console.log('Added old structure entry:', {url, hash});
            }
        }
        
        console.log('Total history entries:', allHistoryData.length);
        
        // Sort by timestamp (newest first)
        allHistoryData.sort((a, b) => b.timestamp - a.timestamp);
        
        displayHistoryData();
        updateStats();
    });
}

function displayHistoryData() {
    let filteredData = filterDataByTimeRange(allHistoryData, currentFilter);
    displayHistoryTable(filteredData);
}

function filterDataByTimeRange(data, filter) {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    const monthAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
    
    switch(filter) {
        case 'today':
            return data.filter(entry => new Date(entry.timestamp) >= today);
        case 'week':
            return data.filter(entry => new Date(entry.timestamp) >= weekAgo);
        case 'month':
            return data.filter(entry => new Date(entry.timestamp) >= monthAgo);
        default:
            return data;
    }
}

function displayHistoryTable(data) {
    const tableBody = document.getElementById('historyTableBody');
    const emptyState = document.getElementById('emptyState');
    const tableContainer = document.getElementById('historyTableContainer');
    
    if (data.length === 0) {
        tableContainer.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    }
    
    tableContainer.style.display = 'block';
    emptyState.style.display = 'none';
    
    tableBody.innerHTML = '';
    
    data.forEach((entry, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="hash-cell">${entry.hash}</td>
            <td class="url-cell" title="${entry.url}">${entry.url}</td>
            <td>${entry.domain}</td>
            <td class="date-cell">${entry.date}</td>
            <td class="action-cell">
                <button class="action-btn copy-btn copy-hash-btn" data-hash="${entry.hash}" title="Copy Hash">Copy</button>
                <button class="action-btn copy-btn copy-url-btn" data-url="${entry.url}" title="Copy URL">URL</button>
                <button class="action-btn delete-btn delete-entry-btn" data-hash="${entry.hash}" data-timestamp="${entry.timestamp}" title="Delete Entry">Del</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
    
    // Add event listeners to the newly created buttons
    setupTableButtonListeners();
}

function updateStats() {
    const totalEntries = allHistoryData.length;
    const uniqueHashes = new Set(allHistoryData.map(entry => entry.hash)).size;
    const uniqueDomains = new Set(allHistoryData.map(entry => entry.domain)).size;
    
    // Calculate successful hits - reset to 0 when no entries exist
    const successfulHits = totalEntries === 0 ? 0 : Math.floor(Math.random() * 10); // Placeholder - replace with actual logic
    
    document.getElementById('totalEntries').textContent = totalEntries;
    document.getElementById('uniqueHashes').textContent = uniqueHashes;
    document.getElementById('uniqueDomains').textContent = uniqueDomains;
    document.getElementById('successfulHits').textContent = successfulHits;
}

function searchHistory() {
    const searchTerm = document.getElementById('searchBox').value.toLowerCase();
    const filteredData = allHistoryData.filter(entry => {
        return entry.hash.toLowerCase().includes(searchTerm) ||
               entry.url.toLowerCase().includes(searchTerm) ||
               entry.domain.toLowerCase().includes(searchTerm);
    });
    
    displayHistoryTable(filteredData);
}

function exportHistory() {
    const data = allHistoryData.map(entry => ({
        hash: entry.hash,
        url: entry.url,
        domain: entry.domain,
        date: entry.date
    }));
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `blind-xss-history-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    
    URL.revokeObjectURL(url);
    showMessage('History exported successfully');
}

function exportAsCSV() {
    const headers = ['Hash', 'URL', 'Domain', 'Date'];
    const csvData = allHistoryData.map(entry => [
        entry.hash,
        entry.url,
        entry.domain,
        entry.date
    ]);
    
    const csvContent = [headers, ...csvData]
        .map(row => row.map(cell => `"${cell}"`).join(','))
        .join('\n');
    
    const blob = new Blob([csvContent], {type: 'text/csv'});
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `blind-xss-history-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    
    URL.revokeObjectURL(url);
    showMessage('CSV exported successfully');
}

function exportAsJSON() {
    exportHistory();
}

function exportAsTXT() {
    const txtContent = allHistoryData.map(entry => 
        `Hash: ${entry.hash}\nURL: ${entry.url}\nDomain: ${entry.domain}\nDate: ${entry.date}\n${'-'.repeat(50)}`
    ).join('\n\n');
    
    const blob = new Blob([txtContent], {type: 'text/plain'});
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `blind-xss-history-${new Date().toISOString().split('T')[0]}.txt`;
    link.click();
    
    URL.revokeObjectURL(url);
    showMessage('TXT exported successfully');
}

function clearHistory() {
    console.log('Clear History function called');
    if(confirm('Are you sure you want to clear all history? This cannot be undone.')) {
        console.log('User confirmed clear history');
        chrome.storage.sync.get(null, (items) => {
            console.log('All storage items before clearing:', items);
            const keysToRemove = [];
            
            // Find all history keys to remove
            for (const key in items) {
                if (key.startsWith('history_')) {
                    keysToRemove.push(key);
                    console.log('Found history key to remove:', key);
                }
            }
            
            console.log('Keys to remove:', keysToRemove);
            
            if (keysToRemove.length > 0) {
                chrome.storage.sync.remove(keysToRemove, () => {
                    console.log('Storage cleared successfully');
                    allHistoryData = [];
                    displayHistoryData();
                    updateStats();
                    showMessage('History cleared successfully');
                });
            } else {
                console.log('No history keys found to remove');
                showMessage('No history entries found');
            }
        });
    } else {
        console.log('User cancelled clear history');
    }
}

function copyToClipboard(text) {
    console.log('Copying to clipboard:', text);
    navigator.clipboard.writeText(text).then(() => {
        console.log('Successfully copied to clipboard');
        showMessage('Copied to clipboard');
    }).catch(err => {
        console.log('Clipboard API failed, using fallback');
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showMessage('Copied to clipboard');
    });
}

function deleteEntry(hash, timestamp) {
    console.log('Deleting entry with hash:', hash, 'and timestamp:', timestamp);
    if(confirm('Are you sure you want to delete this entry?')) {
        // Find the entry associated with this hash and timestamp
        const entry = allHistoryData.find(e => e.hash === hash && e.timestamp == timestamp);
        if (entry) {
            console.log('Found entry to delete:', entry);
            // Find the storage key for this entry using timestamp for uniqueness
            chrome.storage.sync.get(null, (items) => {
                console.log('All storage items:', items);
                let keyToDelete = null;
                
                for (const key in items) {
                    if (key.startsWith('history_')) {
                        const item = items[key];
                        console.log(`Checking key: ${key}, item:`, item);
                        
                        // Match by hash AND timestamp to ensure we delete the exact entry
                        if (item.hash === entry.hash && item.timestamp == entry.timestamp) {
                            keyToDelete = key;
                            console.log('Found matching entry by hash and timestamp');
                            break;
                        }
                    }
                }
                
                if (keyToDelete) {
                    console.log('Deleting storage key:', keyToDelete);
                    chrome.storage.sync.remove(keyToDelete, () => {
                        // Remove only the specific entry by matching both hash and timestamp
                        allHistoryData = allHistoryData.filter(e => !(e.hash === hash && e.timestamp == timestamp));
                        displayHistoryData();
                        updateStats();
                        showMessage('Entry deleted successfully');
                    });
                } else {
                    console.log('Entry not found in storage. Available history keys:');
                    for (const key in items) {
                        if (key.startsWith('history_')) {
                            console.log(`- ${key}:`, items[key]);
                        }
                    }
                    showMessage('Entry not found in storage');
                }
            });
        } else {
            console.log('Entry not found in allHistoryData');
        }
    }
}

function filterHistory(filter, event) {
    currentFilter = filter;
    
    // Update filter tabs
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    // Filter and display data
    displayHistoryData();
}

function showMessage(text) {
    const message = document.getElementById('message');
    message.textContent = text;
    message.style.display = 'block';
    
    setTimeout(() => {
        message.style.display = 'none';
    }, 3000);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('History page DOM loaded, initializing...');
    loadHistoryData();
    
    // Setup search functionality
    const searchBox = document.getElementById('searchBox');
    if (searchBox) {
        searchBox.addEventListener('input', searchHistory);
        console.log('Search box event listener attached');
    }
    
    // Setup filter functionality
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', function(event) {
            document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            filterHistory(filter, event);
        });
    });
    console.log('Filter tabs event listeners attached');
    
    // Setup button event listeners
    console.log('Setting up button listeners...');
    setupButtonListeners();
    console.log('Button listeners setup complete');
});

// Also keep window.onload as fallback
window.onload = function() {
    console.log('History page window loaded (fallback)');
    // Only setup if DOMContentLoaded hasn't run yet
    if (!document.getElementById('clearHistoryBtn').hasAttribute('data-initialized')) {
        console.log('Setting up from window.onload fallback');
        loadHistoryData();
        setupButtonListeners();
        document.getElementById('clearHistoryBtn').setAttribute('data-initialized', 'true');
    }
}

function setupButtonListeners() {
    // Back to Main button
    const backToMainBtn = document.getElementById('backToMainBtn');
    if (backToMainBtn) {
        backToMainBtn.addEventListener('click', function() {
            chrome.tabs.create({url: chrome.runtime.getURL('popup.html')});
        });
    }
    
    // Go to Main button (in empty state)
    const goToMainBtn = document.getElementById('goToMainBtn');
    if (goToMainBtn) {
        goToMainBtn.addEventListener('click', function() {
            chrome.tabs.create({url: chrome.runtime.getURL('popup.html')});
        });
    }
    

    
    // Clear History button
    const clearHistoryBtn = document.getElementById('clearHistoryBtn');
    console.log('Clear History button found:', clearHistoryBtn);
    if (clearHistoryBtn) {
        clearHistoryBtn.addEventListener('click', function() {
            console.log('Clear History button clicked');
            clearHistory();
        });
        console.log('Clear History button event listener attached');
    } else {
        console.error('Clear History button not found!');
    }
    
    // Export CSV button
    const exportCSVBtn = document.getElementById('exportCSVBtn');
    if (exportCSVBtn) {
        exportCSVBtn.addEventListener('click', exportAsCSV);
    }
    
    // Export JSON button
    const exportJSONBtn = document.getElementById('exportJSONBtn');
    if (exportJSONBtn) {
        exportJSONBtn.addEventListener('click', exportAsJSON);
    }
    
    // Export TXT button
    const exportTXTBtn = document.getElementById('exportTXTBtn');
    if (exportTXTBtn) {
        exportTXTBtn.addEventListener('click', exportAsTXT);
    }
}

function setupTableButtonListeners() {
    // Copy Hash buttons
    document.querySelectorAll('.copy-hash-btn').forEach(button => {
        button.addEventListener('click', function() {
            const hash = this.getAttribute('data-hash');
            copyToClipboard(hash);
        });
    });
    
    // Copy URL buttons
    document.querySelectorAll('.copy-url-btn').forEach(button => {
        button.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            copyToClipboard(url);
        });
    });
    
    // Delete Entry buttons
    document.querySelectorAll('.delete-entry-btn').forEach(button => {
        button.addEventListener('click', function() {
            const hash = this.getAttribute('data-hash');
            const timestamp = this.getAttribute('data-timestamp');
            deleteEntry(hash, timestamp);
        });
    });
}
