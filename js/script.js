/**
 * Golden Ticket Chocolates - Main JavaScript
 * Handles mobile navigation and form validation
 */

(function() {
  'use strict';

  // ================================
  // Mobile Navigation Toggle
  // ================================

  function initMobileNav() {
    var navToggle = document.querySelector('.nav-toggle');
    var navList = document.querySelector('.nav-list');
    var header = document.querySelector('.header');

    if (!navToggle || !navList) return;

    navToggle.addEventListener('click', function() {
      navList.classList.toggle('nav-open');
      header.classList.toggle('nav-mobile-open');

      // Update aria-expanded
      var isOpen = navList.classList.contains('nav-open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!header.contains(e.target) && navList.classList.contains('nav-open')) {
        navList.classList.remove('nav-open');
        header.classList.remove('nav-mobile-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close menu when pressing Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && navList.classList.contains('nav-open')) {
        navList.classList.remove('nav-open');
        header.classList.remove('nav-mobile-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.focus();
      }
    });
  }

  // ================================
  // Form Validation
  // ================================

  function initFormValidation() {
    var form = document.querySelector('.contact-form form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
      var isValid = validateForm(form);

      if (!isValid) {
        e.preventDefault();
      }
    });

    // Real-time validation on blur
    var inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(function(input) {
      input.addEventListener('blur', function() {
        validateField(input);
      });

      // Clear error on input
      input.addEventListener('input', function() {
        clearFieldError(input);
      });
    });
  }

  function validateForm(form) {
    var isValid = true;
    var requiredFields = form.querySelectorAll('[required]');

    requiredFields.forEach(function(field) {
      if (!validateField(field)) {
        isValid = false;
      }
    });

    // Focus first invalid field
    if (!isValid) {
      var firstError = form.querySelector('.has-error input, .has-error select, .has-error textarea');
      if (firstError) {
        firstError.focus();
      }
    }

    return isValid;
  }

  function validateField(field) {
    var parent = field.closest('.form-group');
    var errorEl = parent ? parent.querySelector('.form-error') : null;
    var value = field.value.trim();
    var isValid = true;
    var errorMessage = '';

    // Check required
    if (field.hasAttribute('required') && !value) {
      isValid = false;
      errorMessage = 'This field is required';
    }

    // Check email format
    if (isValid && field.type === 'email' && value) {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        errorMessage = 'Please enter a valid email address';
      }
    }

    // Check phone format (optional but if filled, validate)
    if (isValid && field.type === 'tel' && value) {
      var phoneRegex = /^[\d\s\-\(\)\+]+$/;
      if (!phoneRegex.test(value) || value.replace(/\D/g, '').length < 10) {
        isValid = false;
        errorMessage = 'Please enter a valid phone number';
      }
    }

    // Update UI
    if (parent) {
      if (isValid) {
        parent.classList.remove('has-error');
        if (errorEl) errorEl.textContent = '';
      } else {
        parent.classList.add('has-error');
        if (errorEl) errorEl.textContent = errorMessage;
      }
    }

    return isValid;
  }

  function clearFieldError(field) {
    var parent = field.closest('.form-group');
    if (parent && parent.classList.contains('has-error')) {
      // Only clear if the field now has a value (for required fields)
      if (field.value.trim()) {
        parent.classList.remove('has-error');
        var errorEl = parent.querySelector('.form-error');
        if (errorEl) errorEl.textContent = '';
      }
    }
  }

  // ================================
  // Netlify Form Success Handler
  // ================================

  function handleNetlifyFormSuccess() {
    // Check if we're on the success page (URL contains ?success=true)
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      var successMessage = document.querySelector('.form-success');
      if (successMessage) {
        successMessage.classList.add('show');
        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }

  // ================================
  // Load Includes (Header & Footer)
  // ================================

  function loadIncludes() {
    // Load header
    var headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
      fetch('/includes/header.html')
        .then(function(response) {
          return response.text();
        })
        .then(function(html) {
          headerPlaceholder.innerHTML = html;
          // Initialize mobile nav after header loads
          initMobileNav();
        })
        .catch(function(err) {
          console.log('Error loading header:', err);
        });
    }

    // Load footer
    var footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
      fetch('/includes/footer.html')
        .then(function(response) {
          return response.text();
        })
        .then(function(html) {
          footerPlaceholder.innerHTML = html;
        })
        .catch(function(err) {
          console.log('Error loading footer:', err);
        });
    }
  }

  // ================================
  // Initialize
  // ================================

  function init() {
    loadIncludes();
    initFormValidation();
    handleNetlifyFormSuccess();
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
