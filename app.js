// Application data
const appData = {
  "subscriptions": [
    {
      "id": 1,
      "service": "Netflix Premium",
      "category": "Streaming",
      "originalPrice": 15.99,
      "askingPrice": 8.99,
      "timeRemaining": "4 months",
      "description": "Family plan with 4K streaming, barely used",
      "sellerRating": 4.8,
      "postedDate": "2 days ago",
      "sellerName": "John Smith",
      "sellerEmail": "john@example.com",
      "sellerId": 1
    },
    {
      "id": 2,
      "service": "Adobe Creative Suite",
      "category": "Software",
      "originalPrice": 52.99,
      "askingPrice": 35.00,
      "timeRemaining": "8 months",
      "description": "Annual plan, switching to different software",
      "sellerRating": 4.9,
      "postedDate": "1 week ago",
      "sellerName": "Sarah Johnson",
      "sellerEmail": "sarah@example.com",
      "sellerId": 2
    },
    {
      "id": 3,
      "service": "Spotify Family",
      "category": "Music",
      "originalPrice": 15.99,
      "askingPrice": 10.00,
      "timeRemaining": "6 months",
      "description": "Family left for college, don't need 6 accounts",
      "sellerRating": 4.6,
      "postedDate": "3 days ago",
      "sellerName": "Mike Wilson",
      "sellerEmail": "mike@example.com",
      "sellerId": 3
    },
    {
      "id": 4,
      "service": "Microsoft Office 365",
      "category": "Software",
      "originalPrice": 69.99,
      "askingPrice": 45.00,
      "timeRemaining": "10 months",
      "description": "Personal plan, got it through work now",
      "sellerRating": 4.7,
      "postedDate": "5 days ago",
      "sellerName": "Emily Davis",
      "sellerEmail": "emily@example.com",
      "sellerId": 4
    },
    {
      "id": 5,
      "service": "Disney+ Bundle",
      "category": "Streaming",
      "originalPrice": 13.99,
      "askingPrice": 8.50,
      "timeRemaining": "3 months",
      "description": "Disney+ with Hulu, kids outgrew Disney content",
      "sellerRating": 4.5,
      "postedDate": "1 day ago",
      "sellerName": "Robert Brown",
      "sellerEmail": "robert@example.com",
      "sellerId": 5
    },
    {
      "id": 6,
      "service": "Planet Fitness Membership",
      "category": "Fitness",
      "originalPrice": 22.99,
      "askingPrice": 15.00,
      "timeRemaining": "7 months",
      "description": "Annual membership, moving cities",
      "sellerRating": 4.4,
      "postedDate": "1 week ago",
      "sellerName": "Lisa Anderson",
      "sellerEmail": "lisa@example.com",
      "sellerId": 6
    }
  ],
  "categories": ["Streaming", "Software", "Music", "Gaming", "Fitness", "News", "Cloud Storage", "VPN"],
  "services": ["Netflix", "Spotify", "Adobe Creative Suite", "Microsoft Office", "Disney+", "Hulu", "Amazon Prime", "YouTube Premium", "PlayStation Plus", "Xbox Game Pass", "Planet Fitness", "Dropbox", "NordVPN", "New York Times", "Canva Pro", "LinkedIn Premium", "Zoom Pro", "Slack", "Other"],
  "users": [
    {
      "id": 1,
      "email": "john@example.com",
      "password": "password123",
      "name": "John Smith",
      "firstName": "John",
      "joinDate": "2025-01-15",
      "profile": {
        "listings": [
          {"id": 1, "service": "Netflix Premium", "status": "active", "datePosted": "2 days ago", "inquiries": 5, "price": 8.99}
        ],
        "orderedItems": [],
        "messageThreads": [
          {
            "threadId": "1_2",
            "withUser": "Sarah Johnson",
            "withUserId": 2,
            "messages": [
              {
                "id": 1,
                "senderId": 1,
                "receiverId": 2,
                "message": "Hi Sarah, I'm interested in your Adobe Creative Suite subscription. Is it still available?",
                "timestamp": "2025-09-27 11:15 PM",
                "read": true
              },
              {
                "id": 2,
                "senderId": 2,
                "receiverId": 1,
                "message": "Hi John! Yes, it's still available. I can transfer it to you this week.",
                "timestamp": "2025-09-27 11:30 PM",
                "read": false
              }
            ],
            "lastMessage": "Hi John! Yes, it's still available. I can transfer it to you this week.",
            "lastMessageTime": "2025-09-27 11:30 PM",
            "unreadCount": 1
          }
        ],
        "stats": {"listings": 1, "orderedItems": 0, "soldItems": 0, "messages": 1, "totalEarnings": 0, "totalSpent": 0}
      }
    },
    {
      "id": 2,
      "email": "sarah@example.com",
      "password": "password456",
      "name": "Sarah Johnson",
      "firstName": "Sarah",
      "joinDate": "2025-02-20",
      "profile": {
        "listings": [
          {"id": 2, "service": "Adobe Creative Suite", "status": "active", "datePosted": "1 week ago", "inquiries": 8, "price": 35.00}
        ],
        "orderedItems": [],
        "messageThreads": [
          {
            "threadId": "1_2",
            "withUser": "John Smith",
            "withUserId": 1,
            "messages": [
              {
                "id": 1,
                "senderId": 1,
                "receiverId": 2,
                "message": "Hi Sarah, I'm interested in your Adobe Creative Suite subscription. Is it still available?",
                "timestamp": "2025-09-27 11:15 PM",
                "read": true
              },
              {
                "id": 2,
                "senderId": 2,
                "receiverId": 1,
                "message": "Hi John! Yes, it's still available. I can transfer it to you this week.",
                "timestamp": "2025-09-27 11:30 PM",
                "read": true
              }
            ],
            "lastMessage": "Hi John! Yes, it's still available. I can transfer it to you this week.",
            "lastMessageTime": "2025-09-27 11:30 PM",
            "unreadCount": 0
          }
        ],
        "stats": {"listings": 1, "orderedItems": 0, "soldItems": 0, "messages": 1, "totalEarnings": 0, "totalSpent": 0}
      }
    },
    {
      "id": 3,
      "email": "mike@example.com",
      "password": "password789",
      "name": "Mike Wilson",
      "firstName": "Mike",
      "joinDate": "2025-03-10",
      "profile": {
        "listings": [
          {"id": 3, "service": "Spotify Family", "status": "active", "datePosted": "3 days ago", "inquiries": 3, "price": 10.00}
        ],
        "orderedItems": [],
        "messageThreads": [],
        "stats": {"listings": 1, "orderedItems": 0, "soldItems": 0, "messages": 0, "totalEarnings": 0, "totalSpent": 0}
      }
    }
  ]
};

// State management
let currentSubscriptions = [...appData.subscriptions];
let currentPage = 'home';
let selectedSubscription = null;
let currentUser = null;
let isAuthenticated = false;
let currentAuthMode = 'signin';
let currentMessageThread = null;
let nextMessageId = 3;

// DOM elements
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-link');
const authModal = document.getElementById('auth-modal');
const messageModal = document.getElementById('message-modal');
const purchaseModal = document.getElementById('purchase-modal');

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeFilters();
    initializeSellForm();
    initializeAuthSystem();
    initializeMessageSystem();
    initializePurchaseSystem();
    renderFeaturedListings();
    renderAllListings();
    populateServiceDropdown();
    updateUnreadCount();
    
    // Set default dates to help with testing
    const today = new Date();
    const futureDate = new Date();
    futureDate.setMonth(futureDate.getMonth() + 6);
    
    const purchaseDateInput = document.getElementById('purchase-date');
    const expirationDateInput = document.getElementById('expiration-date');
    if (purchaseDateInput) purchaseDateInput.value = today.toISOString().split('T')[0];
    if (expirationDateInput) expirationDateInput.value = futureDate.toISOString().split('T')[0];
});

// Authentication System
function initializeAuthSystem() {
    const signInBtn = document.getElementById('signin-btn');
    const registerBtn = document.getElementById('register-btn');
    const authModalClose = document.getElementById('auth-modal-close');
    const authCancelBtn = document.getElementById('auth-cancel-btn');
    const authSwitchLink = document.getElementById('auth-switch-link');
    const authForm = document.getElementById('auth-form');
    const authModalOverlay = authModal.querySelector('.modal__overlay');
    const authModalContent = authModal.querySelector('.modal__content');
    
    if (signInBtn) signInBtn.addEventListener('click', (e) => { e.preventDefault(); showAuthModal('signin'); });
    if (registerBtn) registerBtn.addEventListener('click', (e) => { e.preventDefault(); showAuthModal('register'); });
    if (authModalClose) authModalClose.addEventListener('click', closeAuthModal);
    if (authCancelBtn) authCancelBtn.addEventListener('click', closeAuthModal);
    
    if (authModalContent) {
        authModalContent.addEventListener('click', (e) => e.stopPropagation());
    }
    
    if (authModalOverlay) {
        authModalOverlay.addEventListener('click', (e) => {
            if (e.target === authModalOverlay) closeAuthModal();
        });
    }
    
    if (authSwitchLink) {
        authSwitchLink.addEventListener('click', (e) => {
            e.preventDefault();
            const newMode = currentAuthMode === 'signin' ? 'register' : 'signin';
            showAuthModal(newMode);
        });
    }
    
    if (authForm) authForm.addEventListener('submit', handleAuthSubmission);
    updateAuthUI();
}

function showAuthModal(mode) {
    currentAuthMode = mode;
    const isSignIn = mode === 'signin';
    
    document.getElementById('auth-modal-title').textContent = isSignIn ? 'Sign In' : 'Register';
    document.getElementById('auth-submit-btn').textContent = isSignIn ? 'Sign In' : 'Register';
    
    const nameGroup = document.getElementById('name-group');
    const confirmPasswordGroup = document.getElementById('confirm-password-group');
    const authName = document.getElementById('auth-name');
    const authConfirmPassword = document.getElementById('auth-confirm-password');
    
    if (isSignIn) {
        nameGroup.style.display = 'none';
        confirmPasswordGroup.style.display = 'none';
        authName.removeAttribute('required');
        authConfirmPassword.removeAttribute('required');
    } else {
        nameGroup.style.display = 'block';
        confirmPasswordGroup.style.display = 'block';
        authName.setAttribute('required', 'required');
        authConfirmPassword.setAttribute('required', 'required');
    }
    
    const authSwitchText = document.getElementById('auth-switch-text');
    if (isSignIn) {
        authSwitchText.innerHTML = 'Don\'t have an account? <a href="#" id="auth-switch-link">Register here</a>';
    } else {
        authSwitchText.innerHTML = 'Already have an account? <a href="#" id="auth-switch-link">Sign in here</a>';
    }
    
    document.getElementById('auth-switch-link').addEventListener('click', (e) => {
        e.preventDefault();
        const newMode = currentAuthMode === 'signin' ? 'register' : 'signin';
        showAuthModal(newMode);
    });
    
    clearAuthErrors();
    document.getElementById('auth-form').reset();
    authModal.classList.remove('hidden');
    
    setTimeout(() => {
        const firstInput = isSignIn ? document.getElementById('auth-email') : document.getElementById('auth-name');
        if (firstInput) firstInput.focus();
    }, 100);
}

function closeAuthModal() {
    authModal.classList.add('hidden');
    clearAuthErrors();
    document.getElementById('auth-form').reset();
}

function handleAuthSubmission(e) {
    e.preventDefault();
    clearAuthErrors();
    
    const email = document.getElementById('auth-email').value.trim();
    const password = document.getElementById('auth-password').value;
    const name = currentAuthMode === 'register' ? document.getElementById('auth-name').value.trim() : '';
    const confirmPassword = currentAuthMode === 'register' ? document.getElementById('auth-confirm-password').value : '';
    
    if (currentAuthMode === 'signin') {
        if (!email || !password) {
            showAuthError('Please enter both email and password.');
            return;
        }
        
        const user = appData.users.find(u => u.email === email && u.password === password);
        
        if (user) {
            loginUser(user);
            closeAuthModal();
        } else {
            showAuthError('Invalid email or password. Please try again.');
        }
    } else {
        if (!name || !email || !password || !confirmPassword) {
            showAuthError('Please fill in all required fields.');
            return;
        }
        
        if (!isValidEmail(email)) {
            showAuthError('Please enter a valid email address.');
            return;
        }
        
        if (password.length < 6) {
            showAuthError('Password must be at least 6 characters long.');
            return;
        }
        
        if (password !== confirmPassword) {
            showAuthError('Passwords do not match.');
            return;
        }
        
        const existingUser = appData.users.find(u => u.email === email);
        if (existingUser) {
            showAuthError('An account with this email already exists. Please sign in instead.');
            return;
        }
        
        const newUser = {
            id: Math.max(...appData.users.map(u => u.id)) + 1,
            email: email,
            password: password,
            name: name,
            firstName: name.split(' ')[0],
            joinDate: new Date().toISOString().split('T')[0],
            profile: {
                listings: [],
                orderedItems: [],
                messageThreads: [],
                stats: {listings: 0, orderedItems: 0, soldItems: 0, messages: 0, totalEarnings: 0, totalSpent: 0}
            }
        };
        
        appData.users.push(newUser);
        loginUser(newUser);
        closeAuthModal();
    }
}

function loginUser(user) {
    currentUser = user;
    isAuthenticated = true;
    updateAuthUI();
    updateNavigationVisibility();
    updateUnreadCount();
    
    const contactEmailInput = document.getElementById('contact-email');
    if (contactEmailInput && !contactEmailInput.value) {
        contactEmailInput.value = user.email;
    }
    
    showAuthSuccess(`Welcome, ${user.firstName}!`);
}

function logoutUser() {
    currentUser = null;
    isAuthenticated = false;
    updateAuthUI();
    updateNavigationVisibility();
    navigateToPage('home');
    
    const contactEmailInput = document.getElementById('contact-email');
    if (contactEmailInput) contactEmailInput.value = '';
}

function updateAuthUI() {
    const headerAuth = document.getElementById('header-auth');
    
    if (isAuthenticated && currentUser) {
        headerAuth.innerHTML = `
            <span class="user-welcome">Welcome, ${currentUser.firstName}!</span>
            <button class="btn btn--outline btn--sm" onclick="logoutUser()">Sign Out</button>
        `;
    } else {
        headerAuth.innerHTML = `
            <button class="btn btn--outline btn--sm" id="signin-btn">Sign In</button>
            <button class="btn btn--primary btn--sm" id="register-btn">Register</button>
        `;
        
        document.getElementById('signin-btn').addEventListener('click', (e) => { e.preventDefault(); showAuthModal('signin'); });
        document.getElementById('register-btn').addEventListener('click', (e) => { e.preventDefault(); showAuthModal('register'); });
    }
}

function updateNavigationVisibility() {
    const profileNav = document.querySelector('.profile-nav');
    const messagesNav = document.querySelector('.messages-nav');
    
    if (isAuthenticated) {
        profileNav.classList.remove('hidden');
        messagesNav.classList.remove('hidden');
    } else {
        profileNav.classList.add('hidden');
        messagesNav.classList.add('hidden');
    }
}

function showAuthError(message) {
    const errorDiv = document.getElementById('auth-error-message');
    errorDiv.textContent = message;
    errorDiv.classList.remove('hidden');
}

function clearAuthErrors() {
    const errorDiv = document.getElementById('auth-error-message');
    errorDiv.classList.add('hidden');
    errorDiv.textContent = '';
}

function showAuthSuccess(message) {
    const successDiv = document.createElement('div');
    successDiv.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: rgba(var(--color-success-rgb), 0.1);
        border: 1px solid var(--color-success);
        color: var(--color-success);
        padding: 12px 16px;
        border-radius: 8px;
        font-size: 14px;
        z-index: 1001;
    `;
    successDiv.textContent = message;
    
    document.body.appendChild(successDiv);
    setTimeout(() => {
        if (successDiv.parentNode) successDiv.remove();
    }, 3000);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Message System
function initializeMessageSystem() {
    const messageModalClose = document.getElementById('message-modal-close');
    const messageCancelBtn = document.getElementById('message-cancel-btn');
    const messageForm = document.getElementById('message-form');
    const messageModalOverlay = messageModal.querySelector('.modal__overlay');
    const messageModalContent = messageModal.querySelector('.modal__content');
    
    if (messageModalClose) messageModalClose.addEventListener('click', closeMessageModal);
    if (messageCancelBtn) messageCancelBtn.addEventListener('click', closeMessageModal);
    
    if (messageModalContent) {
        messageModalContent.addEventListener('click', (e) => e.stopPropagation());
    }
    
    if (messageModalOverlay) {
        messageModalOverlay.addEventListener('click', (e) => {
            if (e.target === messageModalOverlay) closeMessageModal();
        });
    }
    
    if (messageForm) messageForm.addEventListener('submit', handleMessageSubmission);
}

function openMessageModal(subscriptionId) {
    if (!isAuthenticated) {
        showAuthModal('signin');
        return;
    }

    const subscription = appData.subscriptions.find(sub => sub.id === subscriptionId);
    if (!subscription) return;
    
    if (subscription.sellerId === currentUser.id) {
        showAuthSuccess("You can't message yourself!");
        return;
    }

    selectedSubscription = subscription;
    
    const messageText = document.getElementById('message-text');
    if (messageText) {
        messageText.value = `Hi! I'm interested in your ${subscription.service} subscription. Is it still available?`;
    }
    
    messageModal.classList.remove('hidden');
}

function closeMessageModal() {
    messageModal.classList.add('hidden');
    const messageForm = document.getElementById('message-form');
    if (messageForm) messageForm.reset();
}

function handleMessageSubmission(e) {
    e.preventDefault();
    
    const messageText = document.getElementById('message-text').value.trim();
    if (!messageText) return;
    
    const sellerId = selectedSubscription.sellerId;
    const seller = appData.users.find(u => u.id === sellerId);
    
    if (!seller) return;
    
    const threadId = `${Math.min(currentUser.id, sellerId)}_${Math.max(currentUser.id, sellerId)}`;
    
    // Create message object
    const newMessage = {
        id: nextMessageId++,
        senderId: currentUser.id,
        receiverId: sellerId,
        message: messageText,
        timestamp: new Date().toLocaleString(),
        read: false
    };
    
    // Find or create thread in current user's profile
    let userThread = currentUser.profile.messageThreads.find(t => t.threadId === threadId);
    if (!userThread) {
        userThread = {
            threadId: threadId,
            withUser: seller.name,
            withUserId: sellerId,
            messages: [],
            lastMessage: messageText,
            lastMessageTime: newMessage.timestamp,
            unreadCount: 0
        };
        currentUser.profile.messageThreads.push(userThread);
    }
    
    // Find or create thread in seller's profile
    let sellerThread = seller.profile.messageThreads.find(t => t.threadId === threadId);
    if (!sellerThread) {
        sellerThread = {
            threadId: threadId,
            withUser: currentUser.name,
            withUserId: currentUser.id,
            messages: [],
            lastMessage: messageText,
            lastMessageTime: newMessage.timestamp,
            unreadCount: 1
        };
        seller.profile.messageThreads.push(sellerThread);
    } else {
        sellerThread.lastMessage = messageText;
        sellerThread.lastMessageTime = newMessage.timestamp;
        sellerThread.unreadCount++;
    }
    
    // Add message to both threads
    userThread.messages.push(newMessage);
    sellerThread.messages.push(newMessage);
    userThread.lastMessage = messageText;
    userThread.lastMessageTime = newMessage.timestamp;
    
    // Update stats
    currentUser.profile.stats.messages++;
    seller.profile.stats.messages++;
    
    updateUnreadCount();
    closeMessageModal();
    showAuthSuccess('Message sent successfully!');
}

function updateUnreadCount() {
    if (!isAuthenticated) return;
    
    const totalUnread = currentUser.profile.messageThreads.reduce((sum, thread) => sum + thread.unreadCount, 0);
    const unreadBadge = document.getElementById('unread-count');
    
    if (totalUnread > 0) {
        unreadBadge.textContent = totalUnread;
        unreadBadge.classList.remove('hidden');
    } else {
        unreadBadge.classList.add('hidden');
    }
}

function renderMessages() {
    if (!isAuthenticated) return;
    
    const threadsContainer = document.getElementById('message-threads');
    const chatContainer = document.getElementById('message-chat');
    
    if (currentUser.profile.messageThreads.length === 0) {
        threadsContainer.innerHTML = '<div class="empty-state"><p>No messages yet</p></div>';
        return;
    }
    
    threadsContainer.innerHTML = currentUser.profile.messageThreads
        .sort((a, b) => new Date(b.lastMessageTime) - new Date(a.lastMessageTime))
        .map(thread => `
            <div class="message-thread ${currentMessageThread?.threadId === thread.threadId ? 'active' : ''}" 
                 onclick="openMessageThread('${thread.threadId}')">
                <div class="message-thread-user">
                    ${thread.withUser}
                    ${thread.unreadCount > 0 ? `<span class="message-thread-unread">${thread.unreadCount}</span>` : ''}
                </div>
                <div class="message-thread-preview">${thread.lastMessage}</div>
                <div class="message-thread-time">${thread.lastMessageTime}</div>
            </div>
        `).join('');
}

function openMessageThread(threadId) {
    const thread = currentUser.profile.messageThreads.find(t => t.threadId === threadId);
    if (!thread) return;
    
    currentMessageThread = thread;
    thread.unreadCount = 0;
    
    // Mark messages as read
    thread.messages.forEach(msg => {
        if (msg.receiverId === currentUser.id) {
            msg.read = true;
        }
    });
    
    updateUnreadCount();
    renderMessages();
    renderMessageChat();
}

function renderMessageChat() {
    if (!currentMessageThread) return;
    
    const chatContainer = document.getElementById('message-chat');
    
    chatContainer.innerHTML = `
        <div class="chat-header">${currentMessageThread.withUser}</div>
        <div class="chat-messages">
            ${currentMessageThread.messages.map(msg => `
                <div class="chat-message ${msg.senderId === currentUser.id ? 'sent' : 'received'}">
                    <div>${msg.message}</div>
                    <div class="chat-message-time">${msg.timestamp}</div>
                </div>
            `).join('')}
        </div>
        <div class="chat-input">
            <form class="chat-input-form" onsubmit="sendChatMessage(event)">
                <input type="text" placeholder="Type a message..." required>
                <button type="submit" class="btn btn--primary btn--sm">Send</button>
            </form>
        </div>
    `;
    
    const messagesDiv = chatContainer.querySelector('.chat-messages');
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function sendChatMessage(e) {
    e.preventDefault();
    
    const input = e.target.querySelector('input');
    const messageText = input.value.trim();
    if (!messageText) return;
    
    const newMessage = {
        id: nextMessageId++,
        senderId: currentUser.id,
        receiverId: currentMessageThread.withUserId,
        message: messageText,
        timestamp: new Date().toLocaleString(),
        read: false
    };
    
    // Add to current user's thread
    currentMessageThread.messages.push(newMessage);
    currentMessageThread.lastMessage = messageText;
    currentMessageThread.lastMessageTime = newMessage.timestamp;
    
    // Add to other user's thread
    const otherUser = appData.users.find(u => u.id === currentMessageThread.withUserId);
    if (otherUser) {
        const otherThread = otherUser.profile.messageThreads.find(t => t.threadId === currentMessageThread.threadId);
        if (otherThread) {
            otherThread.messages.push(newMessage);
            otherThread.lastMessage = messageText;
            otherThread.lastMessageTime = newMessage.timestamp;
            otherThread.unreadCount++;
        }
    }
    
    input.value = '';
    renderMessageChat();
    renderMessages();
}

// Purchase System
function initializePurchaseSystem() {
    const purchaseModalClose = document.getElementById('purchase-modal-close');
    const purchaseCancelBtn = document.getElementById('purchase-cancel-btn');
    const confirmPurchaseBtn = document.getElementById('confirm-purchase-btn');
    const purchaseModalOverlay = purchaseModal.querySelector('.modal__overlay');
    const purchaseModalContent = purchaseModal.querySelector('.modal__content');
    
    if (purchaseModalClose) purchaseModalClose.addEventListener('click', closePurchaseModal);
    if (purchaseCancelBtn) purchaseCancelBtn.addEventListener('click', closePurchaseModal);
    if (confirmPurchaseBtn) confirmPurchaseBtn.addEventListener('click', handlePurchaseConfirmation);
    
    if (purchaseModalContent) {
        purchaseModalContent.addEventListener('click', (e) => e.stopPropagation());
    }
    
    if (purchaseModalOverlay) {
        purchaseModalOverlay.addEventListener('click', (e) => {
            if (e.target === purchaseModalOverlay) closePurchaseModal();
        });
    }
}

function openPurchaseModal(subscriptionId) {
    if (!isAuthenticated) {
        showAuthModal('signin');
        return;
    }

    const subscription = appData.subscriptions.find(sub => sub.id === subscriptionId);
    if (!subscription) return;
    
    if (subscription.sellerId === currentUser.id) {
        showAuthSuccess("You can't purchase your own subscription!");
        return;
    }

    selectedSubscription = subscription;
    
    const purchaseDetails = document.getElementById('purchase-details');
    const discountPercent = Math.round((1 - subscription.askingPrice / subscription.originalPrice) * 100);
    
    purchaseDetails.innerHTML = `
        <div class="purchase-details">
            <h4>${subscription.service}</h4>
            <div class="purchase-item">
                <span>Original Price:</span>
                <span>$${subscription.originalPrice.toFixed(2)}</span>
            </div>
            <div class="purchase-item">
                <span>Your Price:</span>
                <span>$${subscription.askingPrice.toFixed(2)}</span>
            </div>
            <div class="purchase-item">
                <span>You Save:</span>
                <span>$${(subscription.originalPrice - subscription.askingPrice).toFixed(2)} (${discountPercent}%)</span>
            </div>
            <div class="purchase-item">
                <span>Time Remaining:</span>
                <span>${subscription.timeRemaining}</span>
            </div>
            <div class="purchase-item">
                <span>Seller:</span>
                <span>${subscription.sellerName}</span>
            </div>
            <div class="purchase-item">
                <span><strong>Total:</strong></span>
                <span><strong>$${subscription.askingPrice.toFixed(2)}</strong></span>
            </div>
        </div>
    `;
    
    purchaseModal.classList.remove('hidden');
}

function closePurchaseModal() {
    purchaseModal.classList.add('hidden');
}

function handlePurchaseConfirmation() {
    if (!selectedSubscription || !isAuthenticated) return;
    
    const subscriptionId = selectedSubscription.id;
    const sellerId = selectedSubscription.sellerId;
    
    // Find the seller
    const seller = appData.users.find(u => u.id === sellerId);
    if (!seller) return;
    
    // Remove from marketplace
    appData.subscriptions = appData.subscriptions.filter(sub => sub.id !== subscriptionId);
    currentSubscriptions = currentSubscriptions.filter(sub => sub.id !== subscriptionId);
    
    // Add to buyer's ordered items
    const orderItem = {
        subscriptionId: subscriptionId,
        service: selectedSubscription.service,
        price: selectedSubscription.askingPrice,
        sellerName: selectedSubscription.sellerName,
        sellerId: sellerId,
        purchaseDate: new Date().toLocaleDateString(),
        timeRemaining: selectedSubscription.timeRemaining,
        description: selectedSubscription.description
    };
    
    currentUser.profile.orderedItems.push(orderItem);
    
    // Update buyer stats
    currentUser.profile.stats.orderedItems++;
    currentUser.profile.stats.totalSpent += selectedSubscription.askingPrice;
    
    // Update seller's listing status and stats
    const sellerListing = seller.profile.listings.find(l => l.id === subscriptionId);
    if (sellerListing) {
        sellerListing.status = 'sold';
        sellerListing.soldDate = new Date().toLocaleDateString();
        sellerListing.buyer = currentUser.name;
    }
    
    seller.profile.stats.soldItems++;
    seller.profile.stats.totalEarnings += selectedSubscription.askingPrice;
    
    // Re-render listings
    renderAllListings();
    renderFeaturedListings();
    
    closePurchaseModal();
    showAuthSuccess(`Successfully purchased ${selectedSubscription.service}! Check your profile for details.`);
}

// Navigation system
function initializeNavigation() {
    document.addEventListener('click', function(e) {
        if (e.target.hasAttribute('data-page')) {
            e.preventDefault();
            const targetPage = e.target.getAttribute('data-page');
            
            if ((targetPage === 'sell' || targetPage === 'profile' || targetPage === 'messages') && !isAuthenticated) {
                showAuthModal('signin');
                return;
            }
            
            navigateToPage(targetPage);
        }
    });

    document.addEventListener('click', function(e) {
        if (e.target.closest('.listing-card') && !e.target.closest('.listing-card__actions')) {
            e.preventDefault();
            const listingCard = e.target.closest('.listing-card');
            const subscriptionId = parseInt(listingCard.dataset.id);
            viewSubscriptionDetail(subscriptionId);
        }
    });
}

function navigateToPage(pageName) {
    pages.forEach(page => page.classList.remove('active'));
    
    const targetPage = document.getElementById(`${pageName}-page`);
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = pageName;
        
        // Render page-specific content
        if (pageName === 'profile' && isAuthenticated) {
            renderProfile();
        } else if (pageName === 'messages' && isAuthenticated) {
            renderMessages();
        }
    }
    
    navLinks.forEach(link => link.classList.remove('active'));
    const activeLink = document.querySelector(`[data-page="${pageName}"]`);
    if (activeLink && activeLink.classList.contains('nav-link')) {
        activeLink.classList.add('active');
    }
    
    window.scrollTo(0, 0);
}

function renderProfile() {
    if (!isAuthenticated) return;
    
    // Render profile stats
    const statsContainer = document.getElementById('profile-stats');
    const stats = currentUser.profile.stats;
    
    statsContainer.innerHTML = `
        <div class="profile-stat">
            <div class="profile-stat-number">${stats.listings}</div>
            <div class="profile-stat-label">Active Listings</div>
        </div>
        <div class="profile-stat">
            <div class="profile-stat-number">${stats.orderedItems}</div>
            <div class="profile-stat-label">Purchases</div>
        </div>
        <div class="profile-stat">
            <div class="profile-stat-number">${stats.soldItems}</div>
            <div class="profile-stat-label">Sold Items</div>
        </div>
        <div class="profile-stat">
            <div class="profile-stat-number">$${stats.totalEarnings.toFixed(2)}</div>
            <div class="profile-stat-label">Total Earnings</div>
        </div>
        <div class="profile-stat">
            <div class="profile-stat-number">$${stats.totalSpent.toFixed(2)}</div>
            <div class="profile-stat-label">Total Spent</div>
        </div>
        <div class="profile-stat">
            <div class="profile-stat-number">${stats.messages}</div>
            <div class="profile-stat-label">Messages</div>
        </div>
    `;
    
    // Render user listings
    renderUserListings();
    
    // Render ordered items
    renderOrderedItems();
}

function renderUserListings() {
    const container = document.getElementById('user-listings');
    const userListings = currentUser.profile.listings;
    
    if (userListings.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <h3>No listings yet</h3>
                <p>Start selling your unused subscriptions!</p>
                <button class="btn btn--primary" data-page="sell">Create Listing</button>
            </div>
        `;
        return;
    }
    
    container.innerHTML = userListings.map(listing => {
        const subscription = appData.subscriptions.find(sub => sub.id === listing.id);
        const isSold = listing.status === 'sold';
        
        return `
            <div class="listing-card ${isSold ? 'sold' : ''}" ${!isSold ? `data-id="${listing.id}"` : ''}>
                ${isSold ? '<div class="sold-badge">SOLD</div>' : ''}
                <div class="listing-card__header">
                    <h3 class="listing-card__service">${listing.service}</h3>
                    <span class="status--${isSold ? 'success' : 'info'} status">${isSold ? 'SOLD' : 'ACTIVE'}</span>
                </div>
                <div class="listing-card__pricing">
                    <span class="asking-price">$${listing.price.toFixed(2)}</span>
                </div>
                <div class="listing-card__footer">
                    <small>Posted ${listing.datePosted}</small>
                    ${isSold ? `<small>Sold ${listing.soldDate}</small>` : `<small>${listing.inquiries} inquiries</small>`}
                </div>
                ${isSold && listing.buyer ? `
                    <div class="ordered-item-seller">
                        <strong>Sold to:</strong> ${listing.buyer}
                    </div>
                ` : ''}
            </div>
        `;
    }).join('');
}

function renderOrderedItems() {
    const container = document.getElementById('ordered-items');
    const orderedItems = currentUser.profile.orderedItems;
    
    if (orderedItems.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <h3>No purchases yet</h3>
                <p>Browse subscriptions to find great deals!</p>
                <button class="btn btn--primary" data-page="browse">Browse Deals</button>
            </div>
        `;
        return;
    }
    
    container.innerHTML = orderedItems.map(item => `
        <div class="ordered-item">
            <div class="ordered-item-header">
                <h3 class="ordered-item-title">${item.service}</h3>
                <div class="ordered-item-price">$${item.price.toFixed(2)}</div>
            </div>
            <div class="ordered-item-details">
                <p><strong>Time Remaining:</strong> ${item.timeRemaining}</p>
                <p><strong>Description:</strong> ${item.description}</p>
            </div>
            <div class="ordered-item-seller">
                <strong>Seller:</strong> ${item.sellerName} | <strong>Purchased:</strong> ${item.purchaseDate}
            </div>
        </div>
    `).join('');
}

// Render featured listings (first 3)
function renderFeaturedListings() {
    const container = document.getElementById('featured-listings');
    const featuredSubs = appData.subscriptions.slice(0, 3);
    
    container.innerHTML = featuredSubs.map(sub => createListingCard(sub)).join('');
}

// Render all listings
function renderAllListings() {
    const container = document.getElementById('all-listings');
    
    if (currentSubscriptions.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <h3>No subscriptions found</h3>
                <p>Try adjusting your filters or search terms.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = currentSubscriptions.map(sub => createListingCard(sub)).join('');
}

// Create listing card HTML with both message and purchase buttons
function createListingCard(subscription) {
    const discountPercent = Math.round((1 - subscription.askingPrice / subscription.originalPrice) * 100);
    const stars = '★'.repeat(Math.floor(subscription.sellerRating)) + '☆'.repeat(5 - Math.floor(subscription.sellerRating));
    
    return `
        <div class="listing-card" data-id="${subscription.id}">
            <div class="listing-card__header">
                <h3 class="listing-card__service">${subscription.service}</h3>
                <span class="listing-card__category">${subscription.category}</span>
            </div>
            <div class="listing-card__pricing">
                <span class="original-price">$${subscription.originalPrice.toFixed(2)}</span>
                <span class="asking-price">$${subscription.askingPrice.toFixed(2)}</span>
                <span class="discount-badge">${discountPercent}% off</span>
            </div>
            <div class="listing-card__time">${subscription.timeRemaining} remaining</div>
            <p class="listing-card__description">${subscription.description}</p>
            <div class="listing-card__footer">
                <div class="seller-rating">
                    <span class="rating-stars">${stars.substring(0, 5)}</span>
                    <span>${subscription.sellerRating}</span>
                </div>
                <small>${subscription.postedDate}</small>
            </div>
            <div class="listing-card__actions">
                <button class="btn btn--outline btn--sm" onclick="event.stopPropagation(); openMessageModal(${subscription.id})">Message Seller</button>
                <button class="btn btn--primary btn--sm" onclick="event.stopPropagation(); openPurchaseModal(${subscription.id})">Purchase</button>
            </div>
        </div>
    `;
}

// Initialize filters
function initializeFilters() {
    const categoryFilter = document.getElementById('category-filter');
    appData.categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
    
    const searchInput = document.getElementById('search-input');
    const categoryFilterEl = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    const timeFilter = document.getElementById('time-filter');
    const sortFilter = document.getElementById('sort-filter');
    
    if (searchInput) searchInput.addEventListener('input', applyFilters);
    if (categoryFilterEl) categoryFilterEl.addEventListener('change', applyFilters);
    if (priceFilter) priceFilter.addEventListener('change', applyFilters);
    if (timeFilter) timeFilter.addEventListener('change', applyFilters);
    if (sortFilter) sortFilter.addEventListener('change', applyFilters);
}

// Apply filters and search
function applyFilters() {
    let filteredSubs = [...appData.subscriptions];
    
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    if (searchTerm) {
        filteredSubs = filteredSubs.filter(sub => 
            sub.service.toLowerCase().includes(searchTerm) ||
            sub.description.toLowerCase().includes(searchTerm) ||
            sub.category.toLowerCase().includes(searchTerm)
        );
    }
    
    const selectedCategory = document.getElementById('category-filter').value;
    if (selectedCategory) {
        filteredSubs = filteredSubs.filter(sub => sub.category === selectedCategory);
    }
    
    const priceRange = document.getElementById('price-filter').value;
    if (priceRange) {
        const [min, max] = priceRange.split('-').map(p => p === '+' ? Infinity : parseFloat(p));
        filteredSubs = filteredSubs.filter(sub => {
            return max === undefined ? sub.askingPrice >= min : sub.askingPrice >= min && sub.askingPrice <= max;
        });
    }
    
    const timeRange = document.getElementById('time-filter').value;
    if (timeRange) {
        filteredSubs = filteredSubs.filter(sub => {
            const months = parseInt(sub.timeRemaining);
            if (timeRange === '1-3') return months >= 1 && months <= 3;
            if (timeRange === '3-6') return months > 3 && months <= 6;
            if (timeRange === '6+') return months > 6;
            return true;
        });
    }
    
    const sortBy = document.getElementById('sort-filter').value;
    filteredSubs.sort((a, b) => {
        switch (sortBy) {
            case 'price-low':
                return a.askingPrice - b.askingPrice;
            case 'price-high':
                return b.askingPrice - a.askingPrice;
            case 'time-remaining':
                return parseInt(b.timeRemaining) - parseInt(a.timeRemaining);
            case 'newest':
            default:
                const dateOrder = { 'Today': 0, '1 day ago': 1, '2 days ago': 2, '3 days ago': 3, '5 days ago': 5, '1 week ago': 7 };
                return (dateOrder[a.postedDate] || 0) - (dateOrder[b.postedDate] || 0);
        }
    });
    
    currentSubscriptions = filteredSubs;
    renderAllListings();
}

// View subscription detail
function viewSubscriptionDetail(id) {
    const subscription = appData.subscriptions.find(sub => sub.id === id);
    if (!subscription) return;
    
    selectedSubscription = subscription;
    
    const container = document.getElementById('detail-content');
    const discountPercent = Math.round((1 - subscription.askingPrice / subscription.originalPrice) * 100);
    const stars = '★'.repeat(Math.floor(subscription.sellerRating)) + '☆'.repeat(5 - Math.floor(subscription.sellerRating));
    
    container.innerHTML = `
        <div class="detail-card">
            <div class="detail-header">
                <div class="detail-title">
                    <h1>${subscription.service}</h1>
                    <span class="listing-card__category">${subscription.category}</span>
                </div>
                <div class="detail-pricing">
                    <div class="original-price">Originally $${subscription.originalPrice.toFixed(2)}/month</div>
                    <div class="asking-price">$${subscription.askingPrice.toFixed(2)}</div>
                    <div class="discount-badge">${discountPercent}% off</div>
                </div>
            </div>
            
            <div class="detail-info">
                <div class="detail-description">
                    <h3>Description</h3>
                    <p>${subscription.description}</p>
                    
                    <h3>What's Included</h3>
                    <p>Full access to ${subscription.service} with all premium features. Account credentials will be transferred upon payment.</p>
                </div>
                
                <div class="detail-sidebar">
                    <div class="detail-actions">
                        <button class="btn btn--outline" onclick="openMessageModal(${subscription.id})">Message Seller</button>
                        <button class="btn btn--primary" onclick="openPurchaseModal(${subscription.id})">Purchase Now</button>
                    </div>
                    
                    <div class="detail-meta">
                        <div class="detail-meta-item">
                            <span class="detail-meta-label">Time Remaining:</span>
                            <span>${subscription.timeRemaining}</span>
                        </div>
                        <div class="detail-meta-item">
                            <span class="detail-meta-label">Seller Rating:</span>
                            <span>
                                <span class="rating-stars">${stars.substring(0, 5)}</span>
                                ${subscription.sellerRating}
                            </span>
                        </div>
                        <div class="detail-meta-item">
                            <span class="detail-meta-label">Posted:</span>
                            <span>${subscription.postedDate}</span>
                        </div>
                        <div class="detail-meta-item">
                            <span class="detail-meta-label">Category:</span>
                            <span>${subscription.category}</span>
                        </div>
                    </div>
                    
                    <div class="safety-notice">
                        <h4>Safety Tips</h4>
                        <ul style="font-size: 12px; color: var(--color-text-secondary); margin: 8px 0; padding-left: 16px;">
                            <li>Verify subscription status before payment</li>
                            <li>Use secure payment methods</li>
                            <li>Keep transaction records</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    navigateToPage('detail');
}

// Initialize sell form
function initializeSellForm() {
    const form = document.getElementById('sell-form');
    const originalPriceInput = document.getElementById('original-price');
    const askingPriceInput = document.getElementById('asking-price');
    const serviceSelect = document.getElementById('service-select');
    const planInput = document.getElementById('plan-input');
    const descriptionInput = document.getElementById('description-input');
    const purchaseDateInput = document.getElementById('purchase-date');
    const expirationDateInput = document.getElementById('expiration-date');
    
    if (originalPriceInput) originalPriceInput.addEventListener('input', updatePreview);
    if (askingPriceInput) askingPriceInput.addEventListener('input', updatePreview);
    if (serviceSelect) serviceSelect.addEventListener('change', updatePreview);
    if (planInput) planInput.addEventListener('input', updatePreview);
    if (descriptionInput) descriptionInput.addEventListener('input', updatePreview);
    if (purchaseDateInput) purchaseDateInput.addEventListener('change', updatePreview);
    if (expirationDateInput) expirationDateInput.addEventListener('change', updatePreview);
    
    if (form) form.addEventListener('submit', handleSellFormSubmission);
    if (askingPriceInput) askingPriceInput.addEventListener('input', validateAskingPrice);
    if (expirationDateInput) expirationDateInput.addEventListener('input', validateExpirationDate);
    
    const contactEmail = document.getElementById('contact-email');
    if (contactEmail) contactEmail.addEventListener('input', validateEmail);
}

function populateServiceDropdown() {
    const serviceSelect = document.getElementById('service-select');
    if (!serviceSelect) return;
    
    appData.services.forEach(service => {
        const option = document.createElement('option');
        option.value = service;
        option.textContent = service;
        serviceSelect.appendChild(option);
    });
}

function updatePreview() {
    const service = document.getElementById('service-select')?.value || 'Service Name';
    const plan = document.getElementById('plan-input')?.value || '';
    const originalPrice = parseFloat(document.getElementById('original-price')?.value) || 0;
    const askingPrice = parseFloat(document.getElementById('asking-price')?.value) || 0;
    const description = document.getElementById('description-input')?.value || 'Description will appear here';
    const purchaseDate = document.getElementById('purchase-date')?.value;
    const expirationDate = document.getElementById('expiration-date')?.value;
    
    let timeRemaining = 'Time remaining';
    if (purchaseDate && expirationDate) {
        const now = new Date();
        const expiry = new Date(expirationDate);
        const diffTime = expiry - now;
        const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
        if (diffMonths > 0) {
            timeRemaining = `${diffMonths} month${diffMonths !== 1 ? 's' : ''}`;
        } else {
            timeRemaining = 'Expired';
        }
    }
    
    const fullServiceName = plan ? `${service} ${plan}` : service;
    
    const previewService = document.getElementById('preview-service');
    const previewOriginal = document.getElementById('preview-original');
    const previewAsking = document.getElementById('preview-asking');
    const previewTime = document.getElementById('preview-time');
    const previewDescription = document.getElementById('preview-description');
    
    if (previewService) previewService.textContent = fullServiceName;
    if (previewOriginal) previewOriginal.textContent = `$${originalPrice.toFixed(2)}`;
    if (previewAsking) previewAsking.textContent = `$${askingPrice.toFixed(2)}`;
    if (previewTime) previewTime.textContent = timeRemaining;
    if (previewDescription) previewDescription.textContent = description;
}

// Form validation functions
function validateAskingPrice() {
    const originalPrice = parseFloat(document.getElementById('original-price')?.value) || 0;
    const askingPrice = parseFloat(document.getElementById('asking-price')?.value) || 0;
    const askingPriceInput = document.getElementById('asking-price');
    
    if (originalPrice && askingPrice && askingPrice >= originalPrice) {
        showFieldError(askingPriceInput, 'Asking price must be less than original price');
        return false;
    } else {
        clearFieldError(askingPriceInput);
        return true;
    }
}

function validateExpirationDate() {
    const purchaseDate = new Date(document.getElementById('purchase-date')?.value);
    const expirationDate = new Date(document.getElementById('expiration-date')?.value);
    const expirationInput = document.getElementById('expiration-date');
    
    if (purchaseDate && expirationDate && expirationDate <= purchaseDate) {
        showFieldError(expirationInput, 'Expiration date must be after purchase date');
        return false;
    } else if (expirationDate && expirationDate <= new Date()) {
        showFieldError(expirationInput, 'Subscription must not be expired');
        return false;
    } else {
        clearFieldError(expirationInput);
        return true;
    }
}

function validateEmail() {
    const email = document.getElementById('contact-email')?.value;
    const emailInput = document.getElementById('contact-email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email && !emailRegex.test(email)) {
        showFieldError(emailInput, 'Please enter a valid email address');
        return false;
    } else {
        clearFieldError(emailInput);
        return true;
    }
}

function showFieldError(input, message) {
    if (!input) return;
    clearFieldError(input);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    input.parentNode.appendChild(errorDiv);
    input.style.borderColor = 'var(--color-error)';
}

function clearFieldError(input) {
    if (!input) return;
    const existingError = input.parentNode.querySelector('.field-error');
    if (existingError) existingError.remove();
    input.style.borderColor = '';
}

function calculateTimeRemaining(expirationDate) {
    const now = new Date();
    const expiry = new Date(expirationDate);
    const diffTime = expiry - now;
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
    
    if (diffMonths <= 0) return 'Expired';
    return `${diffMonths} month${diffMonths !== 1 ? 's' : ''}`;
}

function getCategoryFromService(service) {
    const categoryMap = {
        'Netflix': 'Streaming', 'Disney+': 'Streaming', 'Hulu': 'Streaming', 'Amazon Prime': 'Streaming',
        'Spotify': 'Music', 'YouTube Premium': 'Music',
        'Adobe Creative Suite': 'Software', 'Microsoft Office': 'Software', 'Canva Pro': 'Software', 'LinkedIn Premium': 'Software', 'Zoom Pro': 'Software', 'Slack': 'Software',
        'PlayStation Plus': 'Gaming', 'Xbox Game Pass': 'Gaming',
        'Planet Fitness': 'Fitness',
        'New York Times': 'News',
        'Dropbox': 'Cloud Storage',
        'NordVPN': 'VPN'
    };
    
    return categoryMap[service] || 'Other';
}

function handleSellFormSubmission(e) {
    e.preventDefault();
    if (!isAuthenticated) {
        showAuthModal('signin');
        return;
    }
    
    document.querySelectorAll('.field-error, .form-error, .success-message').forEach(el => el.remove());
    
    const service = document.getElementById('service-select').value;
    const plan = document.getElementById('plan-input').value;
    const originalPrice = parseFloat(document.getElementById('original-price').value);
    const askingPrice = parseFloat(document.getElementById('asking-price').value);
    const description = document.getElementById('description-input').value;
    const contactEmail = document.getElementById('contact-email').value;
    const purchaseDate = document.getElementById('purchase-date').value;
    const expirationDate = document.getElementById('expiration-date').value;
    
    let isValid = true;
    const errors = [];
    
    if (!service) { errors.push('Please select a service'); isValid = false; }
    if (!plan.trim()) { errors.push('Please enter subscription plan'); isValid = false; }
    if (!originalPrice || originalPrice <= 0) { errors.push('Please enter a valid original price'); isValid = false; }
    if (!askingPrice || askingPrice <= 0) { errors.push('Please enter a valid asking price'); isValid = false; }
    if (!description.trim()) { errors.push('Please enter a description'); isValid = false; }
    if (!contactEmail.trim()) { errors.push('Please enter your contact email'); isValid = false; }
    if (!purchaseDate) { errors.push('Please enter purchase date'); isValid = false; }
    if (!expirationDate) { errors.push('Please enter expiration date'); isValid = false; }
    
    if (!validateAskingPrice()) isValid = false;
    if (!validateExpirationDate()) isValid = false;
    if (!validateEmail()) isValid = false;
    
    if (!isValid) {
        if (errors.length > 0) {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'form-error';
            errorDiv.innerHTML = `
                <h4>Please fix the following errors:</h4>
                <ul>${errors.map(error => `<li>${error}</li>`).join('')}</ul>
            `;
            const form = document.getElementById('sell-form');
            form.insertBefore(errorDiv, form.firstChild);
        }
        return;
    }
    
    const submitBtn = document.querySelector('#sell-form button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Listing Subscription...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        const newSubscription = {
            id: Math.max(...appData.subscriptions.map(s => s.id)) + 1,
            service: plan ? `${service} ${plan}` : service,
            category: getCategoryFromService(service),
            originalPrice: originalPrice,
            askingPrice: askingPrice,
            timeRemaining: calculateTimeRemaining(expirationDate),
            description: description,
            sellerRating: 5.0,
            postedDate: 'Today',
            sellerName: currentUser.name,
            sellerEmail: contactEmail,
            sellerId: currentUser.id
        };
        
        appData.subscriptions.unshift(newSubscription);
        currentSubscriptions = [...appData.subscriptions];
        
        // Update user's profile
        currentUser.profile.listings.push({
            id: newSubscription.id,
            service: newSubscription.service,
            status: 'active',
            datePosted: 'Today',
            inquiries: 0,
            price: askingPrice
        });
        
        currentUser.profile.stats.listings++;
        
        renderAllListings();
        renderFeaturedListings();
        
        const form = document.getElementById('sell-form');
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.innerHTML = `
            <h3>Your subscription has been listed successfully!</h3>
            <p>Your listing is now live and buyers can contact you. You can view it in the Browse section.</p>
            <div style="margin-top: 12px;">
                <button class="btn btn--primary btn--sm" onclick="navigateToPage('browse')">View Your Listing</button>
                <button class="btn btn--outline btn--sm" onclick="resetSellForm()">List Another Subscription</button>
            </div>
        `;
        
        form.insertBefore(successDiv, form.firstChild);
        form.reset();
        updatePreview();
        
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        setTimeout(() => {
            if (successDiv.parentNode) successDiv.remove();
        }, 10000);
        
    }, 1000);
}

function resetSellForm() {
    document.querySelectorAll('.success-message, .form-error, .field-error').forEach(el => el.remove());
    document.getElementById('sell-form').reset();
    
    const today = new Date();
    const futureDate = new Date();
    futureDate.setMonth(futureDate.getMonth() + 6);
    
    const purchaseDateInput = document.getElementById('purchase-date');
    const expirationDateInput = document.getElementById('expiration-date');
    if (purchaseDateInput) purchaseDateInput.value = today.toISOString().split('T')[0];
    if (expirationDateInput) expirationDateInput.value = futureDate.toISOString().split('T')[0];
    
    if (isAuthenticated && currentUser) {
        const contactEmailInput = document.getElementById('contact-email');
        if (contactEmailInput) contactEmailInput.value = currentUser.email;
    }
    
    updatePreview();
}

// Global function exports
window.openMessageModal = openMessageModal;
window.closeMessageModal = closeMessageModal;
window.openPurchaseModal = openPurchaseModal;
window.closePurchaseModal = closePurchaseModal;
window.resetSellForm = resetSellForm;
window.showAuthModal = showAuthModal;
window.closeAuthModal = closeAuthModal;
window.loginUser = loginUser;
window.logoutUser = logoutUser;
window.navigateToPage = navigateToPage;
window.openMessageThread = openMessageThread;
window.sendChatMessage = sendChatMessage;