import { Building, Edit, Eye, MapPin, Plus, Trash2 } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';
import path from '../../constants/path';

const AdminCareerPage = () => {
  const recentJobs = [
      {
        id: 1,
        title: 'Senior Frontend Developer',
        company: 'TechCorp Vietnam',
        location: 'TP.HCM',
        salary: '25-35 triệu',
        applications: 24,
        status: 'active',
        posted: '2025-09-09'
      },
      {
        id: 2,
        title: 'Marketing Manager',
        company: 'StartUp XYZ',
        location: 'Hà Nội',
        salary: '20-30 triệu',
        applications: 18,
        status: 'active',
        posted: '2025-09-08'
      },
      {
        id: 3,
        title: 'UI/UX Designer',
        company: 'Design Studio',
        location: 'Remote',
        salary: '15-25 triệu',
        applications: 32,
        status: 'closed',
        posted: '2025-09-07'
      }
    ];


  return (
    <>
        <div>
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Tuyển dụng</h1>
                <p className="text-gray-600">Quản lý tất cả việc làm và ứng viên</p>
              </div>
              <Link to={path.admin.career.add}>
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors flex items-center">
                  <Plus className="h-4 w-4 mr-2" />
                  Thêm việc làm mới
                </button>
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">Việc làm gần đây</h3>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors flex items-center">
          <Plus className="h-4 w-4 mr-2" />
          Thêm việc làm
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Vị trí</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Công ty</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Địa điểm</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Mức lương</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ứng tuyển</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Trạng thái</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Thao tác</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {recentJobs.map((job) => (
              <tr key={job.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900 hover:text-blue-600 cursor-pointer">
                    {job.title}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Building className="h-4 w-4 mr-1" />
                    {job.company}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    {job.location}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{job.salary}</td>
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-blue-600">{job.applications}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded ${
                    job.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {job.status === 'active' ? 'Đang tuyển' : 'Đã đóng'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="text-green-600 hover:text-green-800">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
          </div>
    </>
  )
}

export default AdminCareerPage