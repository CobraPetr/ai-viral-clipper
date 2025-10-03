'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { 
  Upload, 
  File, 
  Video, 
  Mic, 
  Link, 
  X, 
  CheckCircle,
  AlertCircle,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useDropzone } from 'react-dropzone';

interface UploadedFile {
  id: string;
  file: File;
  progress: number;
  status: 'uploading' | 'completed' | 'error';
  error?: string;
}

export function UploadInterface() {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles: UploadedFile[] = acceptedFiles.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      progress: 0,
      status: 'uploading' as const,
    }));

    setUploadedFiles(prev => [...prev, ...newFiles]);
    setIsUploading(true);

    // Simulate upload progress
    newFiles.forEach(fileObj => {
      simulateUpload(fileObj.id);
    });
  }, []);

  const simulateUpload = (fileId: string) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 30;
      if (progress >= 100) {
        progress = 100;
        setUploadedFiles(prev => 
          prev.map(file => 
            file.id === fileId 
              ? { ...file, progress: 100, status: 'completed' }
              : file
          )
        );
        clearInterval(interval);
        
        // Check if all uploads are complete
        setTimeout(() => {
          setUploadedFiles(prev => {
            const allComplete = prev.every(file => file.status === 'completed');
            if (allComplete) {
              setIsUploading(false);
            }
            return prev;
          });
        }, 1000);
      } else {
        setUploadedFiles(prev => 
          prev.map(file => 
            file.id === fileId 
              ? { ...file, progress }
              : file
          )
        );
      }
    }, 500);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'audio/*': ['.mp3', '.wav', '.m4a', '.aac'],
      'video/*': ['.mp4', '.mov', '.avi', '.mkv'],
    },
    multiple: true,
  });

  const removeFile = (fileId: string) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== fileId));
  };

  const getFileIcon = (file: File) => {
    if (file.type.startsWith('video/')) {
      return <Video className="h-8 w-8 text-blue-600" />;
    } else if (file.type.startsWith('audio/')) {
      return <Mic className="h-8 w-8 text-green-600" />;
    }
    return <File className="h-8 w-8 text-gray-600" />;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="space-y-6">
      {/* Upload Area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
            isDragActive
              ? 'border-primary-500 bg-primary-50'
              : 'border-gray-300 hover:border-gray-400'
          }`}
        >
          <input {...getInputProps()} />
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <div className="mt-4">
            <h3 className="text-lg font-medium text-gray-900">
              {isDragActive ? 'Drop your files here' : 'Upload your content'}
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Drag and drop your files here, or click to select files
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Supports MP4, MOV, AVI, MP3, WAV, M4A, AAC files up to 2GB
            </p>
          </div>
        </div>
      </motion.div>

      {/* Alternative Upload Methods */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
      >
        <Button variant="outline" className="h-20 flex-col">
          <Link className="h-6 w-6 mb-2" />
          Import from URL
        </Button>
        <Button variant="outline" className="h-20 flex-col">
          <Mic className="h-6 w-6 mb-2" />
          Record Audio
        </Button>
      </motion.div>

      {/* Uploaded Files */}
      {uploadedFiles.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-medium text-gray-900">Uploaded Files</h3>
          {uploadedFiles.map((fileObj) => (
            <div
              key={fileObj.id}
              className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200"
            >
              <div className="flex-shrink-0">
                {getFileIcon(fileObj.file)}
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {fileObj.file.name}
                </p>
                <p className="text-xs text-gray-500">
                  {formatFileSize(fileObj.file.size)}
                </p>
                
                {/* Progress Bar */}
                {fileObj.status === 'uploading' && (
                  <div className="mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${fileObj.progress}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {Math.round(fileObj.progress)}% uploaded
                    </p>
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-2">
                {fileObj.status === 'uploading' && (
                  <Clock className="h-5 w-5 text-blue-600 animate-spin" />
                )}
                {fileObj.status === 'completed' && (
                  <CheckCircle className="h-5 w-5 text-green-600" />
                )}
                {fileObj.status === 'error' && (
                  <AlertCircle className="h-5 w-5 text-red-600" />
                )}
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeFile(fileObj.id)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {/* Action Buttons */}
      {uploadedFiles.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-end space-x-4"
        >
          <Button variant="outline">
            Cancel
          </Button>
          <Button 
            disabled={isUploading || uploadedFiles.some(f => f.status === 'error')}
          >
            {isUploading ? 'Processing...' : 'Start Processing'}
          </Button>
        </motion.div>
      )}
    </div>
  );
}
