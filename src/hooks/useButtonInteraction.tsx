import { useState, useCallback } from 'react';

interface UseButtonInteractionOptions {
  onSuccess?: () => void;
  onError?: (error: string) => void;
  loadingText?: string;
  successText?: string;
  errorText?: string;
  duration?: number;
}

export const useButtonInteraction = (options: UseButtonInteractionOptions = {}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');

  const {
    onSuccess,
    onError,
    loadingText = 'Loading...',
    successText = 'Success!',
    errorText = 'Error occurred',
    duration = 2000
  } = options;

  const handleClick = useCallback(async (action: () => Promise<void> | void) => {
    if (isLoading) return;

    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);
    setMessage(loadingText);

    try {
      await action();
      setIsSuccess(true);
      setMessage(successText);
      onSuccess?.();

      // Reset after duration
      setTimeout(() => {
        setIsSuccess(false);
        setMessage('');
      }, duration);
    } catch (error) {
      setIsError(true);
      setMessage(errorText);
      onError?.(error instanceof Error ? error.message : 'Unknown error');
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, loadingText, successText, errorText, duration, onSuccess, onError]);

  const reset = useCallback(() => {
    setIsLoading(false);
    setIsSuccess(false);
    setIsError(false);
    setMessage('');
  }, []);

  return {
    isLoading,
    isSuccess,
    isError,
    message,
    handleClick,
    reset
  };
};

// Hook for form submission
export const useFormSubmission = (options: UseButtonInteractionOptions = {}) => {
  const buttonInteraction = useButtonInteraction(options);

  const handleFormSubmit = useCallback(async (formData: any) => {
    await buttonInteraction.handleClick(async () => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Validate form data
      if (!formData.name || !formData.phone) {
        throw new Error('Please fill in all required fields');
      }

      // Simulate successful submission
      console.log('Form submitted:', formData);
    });
  }, [buttonInteraction]);

  return {
    ...buttonInteraction,
    handleFormSubmit
  };
};

// Hook for navigation actions
export const useNavigationAction = (options: UseButtonInteractionOptions = {}) => {
  const buttonInteraction = useButtonInteraction(options);

  const handleNavigation = useCallback(async (action: 'login' | 'signup' | 'course' | 'demo') => {
    await buttonInteraction.handleClick(async () => {
      // Simulate navigation delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      switch (action) {
        case 'login':
          console.log('Navigating to login page');
          // window.location.href = '/login';
          break;
        case 'signup':
          console.log('Navigating to signup page');
          // window.location.href = '/signup';
          break;
        case 'course':
          console.log('Navigating to course finder');
          // window.location.href = '/courses';
          break;
        case 'demo':
          console.log('Opening demo request');
          // window.location.href = '/demo';
          break;
      }
    });
  }, [buttonInteraction]);

  return {
    ...buttonInteraction,
    handleNavigation
  };
};
