/**
 * ERPNext Custom Theme - JavaScript
 * Inspired by ThemeRef design system
 * Compatible with Frappe/ERPNext v16
 */

(function() {
    'use strict';

    /**
     * Theme Configuration
     */
    const ThemeConfig = {
        primary: '#0f172a',
        accent: '#0891b2',
        accentLight: '#22d3ee',
        fonts: {
            body: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif",
            heading: "'Space Grotesk', sans-serif"
        },
        animation: {
            duration: 300,
            easing: 'ease'
        }
    };

    /**
     * Initialize theme on DOM ready
     */
    function init() {
        initNavbar();
        initAnimations();
        initButtons();
        initCards();
    }

    /**
     * Navbar scroll behavior
     */
    function initNavbar() {
        const navbar = document.querySelector('.navbar, .nav, .header-nav');
        if (!navbar) return;

        let lastScroll = 0;
        const scrollThreshold = 100;

        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScroll > scrollThreshold) {
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            } else {
                navbar.style.boxShadow = 'none';
                navbar.style.background = 'rgba(255, 255, 255, 0.9)';
            }

            lastScroll = currentScroll;
        }, { passive: true });
    }

    /**
     * Initialize animations with Intersection Observer
     */
    function initAnimations() {
        if (!('IntersectionObserver' in window)) {
            // Fallback for older browsers
            document.querySelectorAll('[data-animate]').forEach(function(el) {
                el.classList.add('animate-slideUp');
            });
            return;
        }

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const delay = el.dataset.animateDelay || 0;
                    setTimeout(function() {
                        el.classList.add('animate-slideUp');
                    }, delay);
                    observer.unobserve(el);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        document.querySelectorAll('[data-animate]').forEach(function(el) {
            observer.observe(el);
        });
    }

    /**
     * Button interactions
     */
    function initButtons() {
        document.querySelectorAll('.btn').forEach(function(btn) {
            // Ripple effect
            btn.addEventListener('click', function(e) {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const ripple = document.createElement('span');
                ripple.className = 'ripple';
                ripple.style.cssText = `
                    position: absolute;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    pointer-events: none;
                    width: 10px;
                    height: 10px;
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    left: ${x}px;
                    top: ${y}px;
                `;

                btn.style.position = 'relative';
                btn.style.overflow = 'hidden';
                btn.appendChild(ripple);

                setTimeout(function() {
                    ripple.remove();
                }, 600);
            });
        });
    }

    /**
     * Card interactions
     */
    function initCards() {
        document.querySelectorAll('.card').forEach(function(card) {
            card.addEventListener('mouseenter', function() {
                card.style.transform = 'translateY(-4px)';
            });

            card.addEventListener('mouseleave', function() {
                card.style.transform = '';
            });
        });
    }

    /**
     * Utility: Get theme color
     */
    window.getThemeColor = function(key) {
        return ThemeConfig[key] || null;
    };

    /**
     * Utility: Set theme color CSS variable
     */
    window.setThemeColor = function(key, value) {
        document.documentElement.style.setProperty('--theme-' + key, value);
    };

    /**
     * Utility: Dark mode toggle
     */
    window.toggleDarkMode = function() {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme-mode', isDark ? 'dark' : 'light');
        return isDark;
    };

    /**
     * Initialize on DOM ready
     */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    /**
     * CSP-safe global exports
     */
    if (typeof window !== 'undefined') {
        window.ERPNextTheme = {
            config: ThemeConfig,
            getColor: window.getThemeColor,
            setColor: window.setThemeColor,
            toggleDarkMode: window.toggleDarkMode
        };
    }

})();