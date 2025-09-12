import React, { useState } from 'react';
import { MapPin, Clock, Users, Briefcase, AlertCircle, ChevronRight, Filter, Search } from 'lucide-react';
import { useJobs } from '../../../queries/careers.query';
import ApplyJobModal from '../../../components/client/News/ApplyJobModal';

// Component Loading Skeleton
const SearchFilterSkeleton = () => (
  <div className="mb-8 bg-white rounded-2xl shadow-lg p-6 border border-gray-100 animate-pulse">
    <div className="flex flex-col md:flex-row gap-4">
      <div className="relative flex-1">
        <div className="h-12 bg-gray-200 rounded-xl"></div>
      </div>
      <div className="relative">
        <div className="h-12 w-48 bg-gray-200 rounded-xl"></div>
      </div>
    </div>
  </div>
);

const JobItemSkeleton = () => (
  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden animate-pulse">
    <div className="p-8">
      {/* Header Skeleton */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-8 w-64 bg-gray-200 rounded"></div>
            <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
          </div>
          
          <div className="flex flex-wrap items-center gap-6 mb-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-5 h-5 bg-gray-200 rounded"></div>
                <div className="h-4 w-20 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-4 lg:mt-0 h-12 w-32 bg-gray-200 rounded-xl"></div>
      </div>

      {/* Skills Skeleton */}
      <div className="mb-6">
        <div className="h-6 w-32 bg-gray-200 rounded mb-3"></div>
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-8 w-16 bg-gray-200 rounded-lg"></div>
          ))}
        </div>
      </div>

      {/* Requirements and Responsibilities Skeleton */}
      <div className="grid md:grid-cols-2 gap-6">
        {[1, 2].map((col) => (
          <div key={col}>
            <div className="h-6 w-40 bg-gray-200 rounded mb-3"></div>
            <div className="space-y-2">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-gray-200 rounded-full mt-2"></div>
                  <div className="h-4 flex-1 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Skeleton */}
      <div className="mt-6 pt-6 border-t border-gray-100 flex justify-between items-center">
        <div className="h-4 w-32 bg-gray-200 rounded"></div>
        <div className="h-4 w-32 bg-gray-200 rounded"></div>
      </div>
    </div>
  </div>
);

const Careers = () => {
  const {data: jobs = { data: [] }, isLoading, isError, refetch} = useJobs();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [jobId, setJobId] = useState(null);

  const departments = ['all', 'Engineering', 'Marketing', 'Sales', 'HR'];
  
  const filteredJobs = jobs.data.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.skills.some(skill => skill.skillName.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Loading State
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <SearchFilterSkeleton />
          
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <JobItemSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <>
        <SearchFilterSkeleton />
        <div className="pb-8 mt-4">
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <JobItemSkeleton key={i} />
            ))}
          </div>
        </div>
      </>
    );
  }

  const handleAplyJob = (jobId) => {
    setIsApplyModalOpen(true)
    setJobId(jobId);
  }

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter Bar */}
        <div className="mb-8 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Tìm kiếm theo tên công việc hoặc kỹ năng..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[200px] appearance-none"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>
                    {dept === 'all' ? 'Tất cả phòng ban' : dept}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <div key={job.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
              <div className="p-8">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {job.title}
                      </h2>
                      {job.urgent && (
                        <div className="flex items-center gap-1 bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                          <AlertCircle className="h-4 w-4" />
                          Tuyển gấp
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-blue-500" />
                        <span className="font-medium">{job.department}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-green-500" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-purple-500" />
                        <span>Kinh nghiệm: {job.experience}</span>
                      </div>
                      {job.location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="h-5 w-5 text-orange-500" />
                          <span>{job.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <button onClick={() => handleAplyJob(job.id)} className="mt-4 lg:mt-0 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
                    Ứng tuyển ngay
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Kỹ năng yêu cầu</h3>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium border border-blue-100 hover:bg-blue-100 transition-colors"
                      >
                        {skill.skillName}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Requirements and Responsibilities */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Yêu cầu công việc
                    </h3>
                    <ul className="space-y-2">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="text-gray-700 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{req.content}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Trách nhiệm công việc
                    </h3>
                    <ul className="space-y-2">
                      {job.responsibilities.map((resp, index) => (
                        <li key={index} className="text-gray-700 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{resp.content}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-6 pt-6 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500">
                  <span>Đăng ngày: {formatDate(job.createdAt)}</span>
                  <span>Cập nhật: {formatDate(job.updatedAt)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredJobs.length === 0 && !isLoading && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Không tìm thấy công việc phù hợp</h3>
            <p className="text-gray-600">Thử thay đổi từ khóa tìm kiếm hoặc bộ lọc để xem thêm kết quả</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Không tìm thấy vị trí phù hợp?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Gửi CV của bạn để chúng tôi có thể liên hệ khi có cơ hội phù hợp
            </p>
            <button className="bg-white cursor-pointer text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-lg">
              Gửi CV tự do
            </button>
          </div>
        </div>
      </div>

      {
        isApplyModalOpen && <ApplyJobModal jobId={jobId} isOpen={isApplyModalOpen} setIsOpen={setIsApplyModalOpen} />
      }

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        .animate-pulse {
          animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default Careers;