class AuthModal {
    constructor() {
        this.initializeElements();
        this.attachEventListeners();
    }

    initializeElements() {
        // Modal elements
        this.loginModal = document.getElementById('loginModal');
        this.registerModal = document.getElementById('registerModal');
        this.loginBtn = document.getElementById('loginBtn');
        this.registerBtn = document.getElementById('registerBtn');
        this.closeBtns = document.querySelectorAll('.close-modal');
        this.switchToRegister = document.getElementById('switchToRegister');
        this.switchToLogin = document.getElementById('switchToLogin');
    }

    attachEventListeners() {
        // Open modals
        this.loginBtn.addEventListener('click', () => this.openModal('login'));
        this.registerBtn.addEventListener('click', () => this.openModal('register'));

        // Close modals
        this.closeBtns.forEach(btn => {
            btn.addEventListener('click', () => this.closeModal(btn.getAttribute('data-modal')));
        });

        // Switch between modals
        this.switchToRegister.addEventListener('click', (e) => this.switchModals(e, 'register'));
        this.switchToLogin.addEventListener('click', (e) => this.switchModals(e, 'login'));

        // Close on outside click
        window.addEventListener('click', (e) => this.handleOutsideClick(e));

        // Prevent form submission (demo only)
        document.getElementById('loginForm').addEventListener('submit', (e) => e.preventDefault());
        document.getElementById('registerForm').addEventListener('submit', (e) => e.preventDefault());
    }

    openModal(type) {
        const modal = type === 'login' ? this.loginModal : this.registerModal;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    switchModals(e, type) {
        e.preventDefault();
        if (type === 'register') {
            this.loginModal.style.display = 'none';
            this.registerModal.style.display = 'block';
        } else {
            this.registerModal.style.display = 'none';
            this.loginModal.style.display = 'block';
        }
    }

    handleOutsideClick(e) {
        if (e.target === this.loginModal || e.target === this.registerModal) {
            this.loginModal.style.display = 'none';
            this.registerModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AuthModal();
});
