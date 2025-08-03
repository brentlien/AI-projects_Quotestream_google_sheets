import React, { useState } from 'react';
import { X, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Real Google Apps Script URL from working version
      const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyUccay0HeKS5aWTsSyeywwL9XCokmxXJUUG7RLEvPM3W1X6RERokoUgiOTPpOss4nDEw/exec';
      
      // Create URL with parameters for GET request
      const params = new URLSearchParams({
        name: formData.name.trim(),
        email: formData.email.trim(),
        feedback: formData.feedback.trim()
      });
      
      const submitUrl = `${APPS_SCRIPT_URL}?${params.toString()}`;
      console.log('📤 Submitting GET request to:', submitUrl);
      
      // Create a hidden image to make the GET request
      const img = new Image();
      img.style.display = 'none';
      img.onload = () => console.log('✅ GET request completed successfully');
      img.onerror = () => console.log('⚠️ GET request completed (expected for Apps Script)');
      img.src = submitUrl;
      
      console.log('✅ GET request sent via image');
    } catch (error) {
      console.error('❌ Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return null;
};

export default ContactModal;