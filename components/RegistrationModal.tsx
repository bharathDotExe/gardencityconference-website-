
import React, { useState } from 'react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    role: 'Academic',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-black text-primary">Conference Registration</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-primary">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {step === 1 ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Full Name</label>
                <input
                  required
                  type="text"
                  className="w-full border-gray-200 rounded-lg focus:ring-accent focus:border-accent"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Email Address</label>
                <input
                  required
                  type="email"
                  className="w-full border-gray-200 rounded-lg focus:ring-accent focus:border-accent"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Institution/Organization</label>
                <input
                  required
                  type="text"
                  className="w-full border-gray-200 rounded-lg focus:ring-accent focus:border-accent"
                  value={formData.institution}
                  onChange={e => setFormData({...formData, institution: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">I am registering as</label>
                <select
                  className="w-full border-gray-200 rounded-lg focus:ring-accent focus:border-accent"
                  value={formData.role}
                  onChange={e => setFormData({...formData, role: e.target.value})}
                >
                  <option>Academic</option>
                  <option>Student</option>
                  <option>Industry Professional</option>
                  <option>Speaker</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-4 rounded-lg mt-4 transition-all uppercase tracking-widest"
              >
                Continue to Payment
              </button>
            </form>
          ) : (
            <div className="text-center py-12">
              <div className="size-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-4xl">check</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Registration Started!</h3>
              <p className="text-gray-500 text-sm mb-8">
                Thank you {formData.name}. We've sent a temporary registration link to <strong>{formData.email}</strong> to complete your profile.
              </p>
              <button
                onClick={onClose}
                className="text-primary font-bold hover:text-accent transition-colors"
              >
                Back to Site
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;
