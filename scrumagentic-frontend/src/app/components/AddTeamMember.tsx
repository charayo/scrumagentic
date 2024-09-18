'use client'
import React, { useState, useRef } from 'react';
import { Upload, X, Check } from 'lucide-react';

interface FormData {
  identifier: string;
  resume: File | null;
}

const AddTeamMember: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    identifier: '',
    resume: null,
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, identifier: e.target.value });
    setError(null);
    setSuccess(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setFormData({ ...formData, resume: file });
      setError(null);
    } else {
      setError('Please upload a PDF file.');
      setFormData({ ...formData, resume: null });
    }
    setSuccess(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.identifier) {
      setError('Please enter a Trello username or email address.');
      return;
    }
    if (!formData.resume) {
      setError('Please upload a resume in PDF format.');
      return;
    }
    
    console.log('Submitting:', formData);
    
    //For my submit
    setSuccess(true);
    setError(null);
    setFormData({ identifier: '', resume: null });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Add Team Member</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="identifier">
            Trello Username or Email
          </label>
          <input
            type="text"
            id="identifier"
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            value={formData.identifier}
            onChange={handleInputChange}
            placeholder="Enter Trello username or email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resume">
            Resume (PDF)
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label htmlFor="resume" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                  <span>Upload a file</span>
                  <input
                    id="resume"
                    name="resume"
                    type="file"
                    ref={fileInputRef}
                    className="sr-only"
                    accept=".pdf"
                    onChange={handleFileChange}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PDF up to 10MB</p>
            </div>
          </div>
          {formData.resume && (
            <p className="mt-2 text-sm text-gray-600">
              Selected file: {formData.resume.name}
            </p>
          )}
        </div>
        {error && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 rounded-md flex items-center">
            <X className="h-5 w-5 mr-2" />
            {error}
          </div>
        )}
        {success && (
          <div className="mb-4 p-2 bg-green-100 text-green-700 rounded-md flex items-center">
            <Check className="h-5 w-5 mr-2" />
            Team member added successfully!
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Team Member
        </button>
      </form>
    </div>
  );
};

export default AddTeamMember;