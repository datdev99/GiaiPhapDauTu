import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { X, Upload, Check } from 'lucide-react';
import { useApplyJob } from '../../../queries/applyJob.query';

const ApplyJobModal = ({isOpen, setIsOpen, jobId}) => {
//   const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const {mutate: addJob} = useApplyJob(); 
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm({
    defaultValues: {
      jobId: jobId,
      fullName: '',
      email: '',
      phone: '',
      cvFile: null
    }
  });

  const watchedFile = watch('cvFile');

  const onSubmit = (data) => {
    setIsSubmitting(true);
    
    addJob(data, {
        onSuccess: () => {
            setIsSubmitting(false);
            alert('Ứng tuyển thành công!');
        },
        onError: (error) => {
            alert('Có lỗi xảy ra. Vui lòng thử lại.');
            console.error('Error applying for job:', error);
        }
    })
  };

//   const openModal = () => {
//     setIsOpen(true);
//     setSubmitSuccess(false);
//   };

  const closeModal = () => {
    if (!isSubmitting) {
      setIsOpen(false);
      reset();
      setSubmitSuccess(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Trigger Button */}
      {/* <button
        onClick={openModal}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
      >
        Mở Form Ứng Tuyển
      </button> */}

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                Form Ứng Tuyển
              </h2>
              <button
                onClick={closeModal}
                disabled={isSubmitting}
                className="text-gray-400 hover:text-gray-600 p-1 disabled:opacity-50"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {submitSuccess ? (
                <div className="text-center py-8">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Gửi thành công!
                  </h3>
                  <p className="text-gray-600">
                    Cảm ơn bạn đã ứng tuyển. Chúng tôi sẽ liên hệ sớm nhất.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* JobId Field */}
                  {/* <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      JobId
                      <span className="text-gray-500 text-xs ml-1">string($uuid)</span>
                    </label>
                    <input
                      {...register('jobId')}
                      type="text"
                      readOnly
                      className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-600 focus:outline-none"
                    />
                    <div className="flex items-center mt-1">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 rounded border-gray-300 mr-2"
                      />
                      <span className="text-sm text-gray-500">Send empty value</span>
                    </div>
                  </div> */}

                  {/* FullName Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      FullName 
                      <span className="text-red-500">*</span>
                      <span className="text-red-500 text-xs ml-1">required</span>
                      {/* <span className="text-gray-500 text-xs ml-1 block">string</span> */}
                    </label>
                    <input
                      {...register('fullName', { required: 'Họ tên là bắt buộc' })}
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Nhập họ và tên"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email 
                      <span className="text-red-500">*</span>
                      <span className="text-red-500 text-xs ml-1">required</span>
                      {/* <span className="text-gray-500 text-xs ml-1 block">string($email)</span> */}
                    </label>
                    <input
                      {...register('email', {
                        required: 'Email là bắt buộc',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Email không hợp lệ'
                        }
                      })}
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="user@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone 
                      <span className="text-red-500">*</span>
                      <span className="text-red-500 text-xs ml-1">required</span>
                      {/* <span className="text-gray-500 text-xs ml-1 block">string($tel)</span> */}
                    </label>
                    <input
                      {...register('phone', {
                        required: 'Số điện thoại là bắt buộc',
                        pattern: {
                          value: /^[0-9+\-\s\(\)]+$/,
                          message: 'Số điện thoại không hợp lệ'
                        }
                      })}
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Nhập số điện thoại"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* CV File Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CVFilePath 
                      <span className="text-red-500">*</span>
                      <span className="text-red-500 text-xs ml-1">required</span>
                      {/* <span className="text-gray-500 text-xs ml-1 block">string($binary)</span> */}
                    </label>
                    <div className="relative">
                      <input
                        {...register('cvFile', { required: 'Vui lòng chọn file CV' })}
                        type="file"
                        accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                        className="hidden"
                        id="cvFile"
                      />
                      <label
                        htmlFor="cvFile"
                        className="w-full flex items-center px-3 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500"
                      >
                        <Upload className="w-5 h-5 text-gray-400 mr-2" />
                        <span className="text-gray-500">
                          {watchedFile && watchedFile[0] 
                            ? watchedFile[0].name 
                            : 'Choose File'
                          }
                        </span>
                      </label>
                    </div>
                    {errors.cvFile && (
                      <p className="mt-1 text-sm text-red-600">{errors.cvFile.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={closeModal}
                      disabled={isSubmitting}
                      className="flex-1 px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Hủy
                    </button>
                    <button
                      type="button"
                      onClick={handleSubmit(onSubmit)}
                      disabled={isSubmitting}
                      className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {isSubmitting ? 'Đang gửi...' : 'Gửi ứng tuyển'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplyJobModal;