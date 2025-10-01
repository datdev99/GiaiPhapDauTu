import { useEffect, useRef, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Bold, Italic, Underline, List, Link, Save, Eye, X, Plus, Settings, FileText, Tag, Briefcase, Star, MapPin, Clock, User } from 'lucide-react';
import { useJobDetails, useUpdateJob } from '../../../queries/job.query';
import { useParams } from 'react-router-dom';

const jobTypes = ['Toàn thời gian', 'Bán thời gian', 'Thực tập', 'Hợp đồng', 'Freelance'];
const departments = ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance', 'Operations', 'Design', 'Product'];
const experienceLevels = ['Intern', '1+ năm', '2+ năm', '3+ năm', '5+ năm', '7+ năm', '10+ năm'];

const EditCareer = () => {
  const careerId = useParams().careerId;
  const { data: jobDetail, isLoading } = useJobDetails(careerId);
  const { mutate: updateJob } = useUpdateJob(careerId);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [newSkill, setNewSkill] = useState('');
  const [newRequirement, setNewRequirement] = useState('');
  const [newResponsibility, setNewResponsibility] = useState('');
  const contentRef = useRef(null);

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    watch,
    // formState: { errors }
  } = useForm({
    defaultValues: {
      title: '',
      department: '',
      location: '',
      type: 'Toàn thời gian',
      experience: '',
      urgent: false,
      description: '',
      skills: [],
      requirements: [],
      responsibilities: []
    }
  });

  useEffect(() => {
    if (jobDetail) {
        setValue("title", jobDetail.data.title || '');
        setValue("department", jobDetail.data.department || '');
        setValue("location", jobDetail.data.location || '');
        setValue("type", jobDetail.data.type || '');
        setValue("experience", jobDetail.data.experience || '');
        setValue("urgent", jobDetail.data.urgent || '');
        setValue("description", jobDetail.data.description || '');
        setValue("skills", jobDetail.data.skills || []);
        setValue("requirements", jobDetail.data.requirements || []);
        setValue("responsibilities", jobDetail.data.responsibilities || []);
        // ... các field khác
    }
    }, [jobDetail, setValue]);

  // Rich text editor functions
  const execCommand = (command, value = null) => {
    // document.execCommand(command, false, value);
    contentRef.current?.focus();
  };

  const handleContentChange = () => {
    if (contentRef.current) {
      setValue('description', contentRef.current.innerHTML);
    }
  };

  const insertLink = () => {
    const url = prompt('Nhập URL:');
    if (url) {
      execCommand('createLink', url);
    }
  };

  // Add skills
  const addSkill = () => {
    if (newSkill.trim()) {
      setValue('skills', [...getValues('skills'), newSkill.trim()]);
      setNewSkill('');
    }
  };

  const removeSkill = (idx) => {
    const skills = getValues('skills');
    setValue('skills', skills.filter((_, i) => i !== idx));
  };

  // Add requirements
  const addRequirement = () => {
    if (newRequirement.trim()) {
      setValue('requirements', [...getValues('requirements'), newRequirement.trim()]);
      setNewRequirement('');
    }
  };

  const removeRequirement = (idx) => {
    const requirements = getValues('requirements');
    setValue('requirements', requirements.filter((_, i) => i !== idx));
  };

  // Add responsibilities
  const addResponsibility = () => {
    if (newResponsibility.trim()) {
      setValue('responsibilities', [...getValues('responsibilities'), newResponsibility.trim()]);
      setNewResponsibility('');
    }
  };

  const removeResponsibility = (idx) => {
    const responsibilities = getValues('responsibilities');
    setValue('responsibilities', responsibilities.filter((_, i) => i !== idx));
  };

  // Submit handler
  const onSubmit = (data) => {
    const jobData = {
      ...data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    updateJob(jobData, {
      onSuccess: () => {
        alert('Tin tuyển dụng đã được cập nhật thành công!');
      }
    });
  };

  const formData = watch();

  console.log(formData, 'formData');
  

  return (
    <div className="bg-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between max-w-full">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-semibold text-gray-800">
              {formData.title || 'Chỉnh sửa tin tuyển dụng'}
            </h1>
            <span className="text-sm text-gray-500">
              {isPreviewMode ? 'Xem trước' : 'Chỉnh sửa'}
            </span>
            {formData.urgent && (
              <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                <Star className="w-3 h-3 mr-1" />
                Cần gấp
              </span>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsPreviewMode(!isPreviewMode)}
              className="px-3 py-1 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50"
            >
              <Eye className="inline w-4 h-4 mr-1" />
              {isPreviewMode ? 'Chỉnh sửa' : 'Xem trước'}
            </button>
            <button
              onClick={handleSubmit(onSubmit)}
              className="px-4 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              <Save className="inline w-4 h-4 mr-1" />
              Lưu tin tuyển dụng
            </button>
          </div>
        </div>
      </div>

      <div className="flex max-w-full">
        {
          !isLoading && (
            <>
              {/* Main Content */}
              <div className="flex-1 py-6">
                {!isPreviewMode ? (
                  <form className="bg-white rounded-lg shadow-sm border border-gray-200">
                    {/* Title Input */}
                    <div className="p-6 border-b border-gray-200">
                      <Controller
                        name="title"
                        control={control}
                        render={({ field }) => (
                          <input
                            {...field}
                            type="text"
                            className="w-full text-3xl font-normal text-gray-900 placeholder-gray-400 border-0 outline-none resize-none"
                            placeholder="Tên vị trí tuyển dụng"
                            style={{ fontSize: '1.875rem', lineHeight: '2.25rem' }}
                          />
                        )}
                      />
                    </div>

                    {/* Job Description */}
                    <div className="p-6">
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Mô tả công việc
                      </label>
                      {/* Toolbar */}
                      <div className="border border-gray-300 rounded-t bg-gray-50 p-3 flex items-center space-x-1">
                        <button type="button" onClick={() => execCommand('bold')} className="p-2 hover:bg-gray-200 rounded transition-colors" title="Đậm">
                          <Bold className="w-4 h-4" />
                        </button>
                        <button type="button" onClick={() => execCommand('italic')} className="p-2 hover:bg-gray-200 rounded transition-colors" title="Nghiêng">
                          <Italic className="w-4 h-4" />
                        </button>
                        <button type="button" onClick={() => execCommand('underline')} className="p-2 hover:bg-gray-200 rounded transition-colors" title="Gạch chân">
                          <Underline className="w-4 h-4" />
                        </button>
                        <div className="w-px bg-gray-300 h-6 mx-2" />
                        <button type="button" onClick={() => execCommand('insertUnorderedList')} className="p-2 hover:bg-gray-200 rounded transition-colors" title="Danh sách">
                          <List className="w-4 h-4" />
                        </button>
                        <button type="button" onClick={insertLink} className="p-2 hover:bg-gray-200 rounded transition-colors" title="Chèn liên kết">
                          <Link className="w-4 h-4" />
                        </button>
                      </div>
                      {/* Content Editor */}
                      <Controller
                        name="description"
                        control={control}
                        render={({ field }) => (
                            <div className="relative">
                            <div
                                ref={contentRef}
                                contentEditable
                                onInput={handleContentChange}
                                className="min-h-64 p-4 border-l border-r border-b border-gray-300 rounded-b 
                                        focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none 
                                        text-base leading-relaxed"
                                suppressContentEditableWarning={true}
                                dangerouslySetInnerHTML={{ __html: field.value || '' }}
                            />
                            {!field.value && (
                                <span className="absolute top-4 left-4 text-gray-400 pointer-events-none">
                                Mô tả chi tiết về vị trí công việc...
                                </span>
                            )}
                            </div>
                        )}
                        />
                    </div>
                  </form>
                ) : (
                  /* Preview Mode */
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                    <div className="max-w-4xl">
                      {/* Job Header */}
                      <div className="mb-8">
                        <div className="flex items-start justify-between mb-4">
                          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                            {formData.title || 'Tên vị trí tuyển dụng'}
                          </h1>
                          {formData.urgent && (
                            <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-red-100 text-red-800 rounded-full">
                              <Star className="w-4 h-4 mr-1" />
                              Cần gấp
                            </span>
                          )}
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Briefcase className="w-4 h-4 mr-2" />
                            {formData.department || 'Chưa chọn phòng ban'}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {formData.location || 'Remote'}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            {formData.type}
                          </div>
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-2" />
                            {formData.experience || 'Không yêu cầu'}
                          </div>
                        </div>
                      </div>
                      {formData?.skills?.length > 0 && (
                        <div className="mb-8">
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">Kỹ năng yêu cầu</h3>
                          <div className="flex flex-wrap gap-2">
                            {formData.skills.map((skill, idx) => (
                            <span 
                                key={skill.id || idx}
                                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                            >
                                {skill.skillName}
                            </span>
                            ))}

                          </div>
                        </div>
                      )}
                      {/* Job Description */}
                      {formData.description && (
                        <div className="mb-8">
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">Mô tả công việc</h3>
                          <div className="text-gray-700 leading-relaxed prose max-w-none" dangerouslySetInnerHTML={{ __html: formData.description }} />
                        </div>
                      )}
                      {/* Requirements */}
                      {formData.requirements.length > 0 && (
                        <div className="mb-8">
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">Yêu cầu công việc</h3>
                          <ul className="space-y-2">
                            {formData.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-gray-700">{req.content}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {/* Responsibilities */}
                      {formData.responsibilities.length > 0 && (
                        <div className="mb-8">
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">Trách nhiệm công việc</h3>
                          <ul className="space-y-2">
                            {formData.responsibilities.map((resp, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-gray-700">{resp.content}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                <div className='grid gap-5 mt-6 grid-cols-1 md:grid-cols-3'>
                  {/* Skills */}
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="px-4 py-3 border-b border-gray-200 bg-gray-50 rounded-t-lg">
                      <h3 className="text-sm font-medium text-gray-900 flex items-center">
                        <Tag className="w-4 h-4 mr-2" />
                        Kỹ năng ({formData.skills.length})
                      </h3>
                    </div>
                    <div className="p-4">
                      <div className="flex space-x-2 mb-3">
                        <input
                          type="text"
                          value={newSkill}
                          onChange={(e) => setNewSkill(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                          className="flex-1 p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                          placeholder="Thêm kỹ năng..."
                        />
                        <button
                          onClick={addSkill}
                          className="px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="space-y-2 max-h-40 overflow-y-auto">
                        {formData.skills.map((skill, idx) => (
                          <div key={idx} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                            <span className="text-sm text-gray-700">{skill.skillName}</span>
                            <button
                              onClick={() => removeSkill(idx)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Requirements */}
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="px-4 py-3 border-b border-gray-200 bg-gray-50 rounded-t-lg">
                      <h3 className="text-sm font-medium text-gray-900 flex items-center">
                        <FileText className="w-4 h-4 mr-2" />
                        Yêu cầu ({formData.requirements.length})
                      </h3>
                    </div>
                    <div className="p-4">
                      <div className="flex space-x-2 mb-3">
                        <input
                          type="text"
                          value={newRequirement}
                          onChange={(e) => setNewRequirement(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && addRequirement()}
                          className="flex-1 p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                          placeholder="Thêm yêu cầu..."
                        />
                        <button
                          onClick={addRequirement}
                          className="px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="space-y-2 max-h-40 overflow-y-auto">
                        {formData.requirements.map((req, idx) => (
                          <div key={idx} className="flex items-start justify-between bg-gray-50 p-2 rounded">
                            <span className="text-sm text-gray-700 flex-1">{req.content}</span>
                            <button
                              onClick={() => removeRequirement(idx)}
                              className="text-red-500 hover:text-red-700 ml-2"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Responsibilities */}
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="px-4 py-3 border-b border-gray-200 bg-gray-50 rounded-t-lg">
                      <h3 className="text-sm font-medium text-gray-900 flex items-center">
                        <Briefcase className="w-4 h-4 mr-2" />
                        Trách nhiệm ({formData.responsibilities.length})
                      </h3>
                    </div>
                    <div className="p-4">
                      <div className="flex space-x-2 mb-3">
                        <input
                          type="text"
                          value={newResponsibility}
                          onChange={(e) => setNewResponsibility(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && addResponsibility()}
                          className="flex-1 p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                          placeholder="Thêm trách nhiệm..."
                        />
                        <button
                          onClick={addResponsibility}
                          className="px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="space-y-2 max-h-40 overflow-y-auto">
                        {formData.responsibilities.map((resp, idx) => (
                          <div key={idx} className="flex items-start justify-between bg-gray-50 p-2 rounded">
                            <span className="text-sm text-gray-700 flex-1">{resp.content}</span>
                            <button
                              onClick={() => removeResponsibility(idx)}
                              className="text-red-500 hover:text-red-700 ml-2"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sidebar */}
              <div className="w-80 py-6 space-y-4 ml-5">
                {/* Job Details */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="px-4 py-3 border-b border-gray-200 bg-gray-50 rounded-t-lg">
                    <h3 className="text-sm font-medium text-gray-900 flex items-center">
                      <Settings className="w-4 h-4 mr-2" />
                      Thông tin công việc
                    </h3>
                  </div>
                  <div className="p-4 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phòng ban</label>
                      <Controller
                        name="department"
                        control={control}
                        render={({ field }) => (
                          <select
                            {...field}
                            className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="">Chọn phòng ban</option>
                            {departments.map(dept => (
                              <option key={dept} value={dept}>{dept}</option>
                            ))}
                          </select>
                        )}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Địa điểm</label>
                      <Controller
                        name="location"
                        control={control}
                        render={({ field }) => (
                          <input
                            {...field}
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                            placeholder="Hà Nội, TP.HCM, Remote..."
                          />
                        )}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Loại hình</label>
                      <Controller
                        name="type"
                        control={control}
                        render={({ field }) => (
                          <select
                            {...field}
                            className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                          >
                            {jobTypes.map(type => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                        )}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Kinh nghiệm</label>
                      <Controller
                        name="experience"
                        control={control}
                        render={({ field }) => (
                          <select
                            {...field}
                            className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="">Không yêu cầu</option>
                            {experienceLevels.map(exp => (
                              <option key={exp} value={exp}>{exp}</option>
                            ))}
                          </select>
                        )}
                      />
                    </div>
                    <div>
                      <label className="flex items-center">
                        <Controller
                          name="urgent"
                          control={control}
                          render={({ field }) => (
                            <input
                              type="checkbox"
                              checked={field.value}
                              onChange={e => field.onChange(e.target.checked)}
                              className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                            />
                          )}
                        />
                        <span className="ml-2 text-sm text-gray-700">Tuyển gấp</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        }
      </div>
    </div>
  );
};

export default EditCareer;