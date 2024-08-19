 
import React from 'react';

const JobViewPage = ({ job }) => {
  if (!job) return <div>Job not found</div>;

  return (
    <div className="container mx-auto p-8">
      <div className="bg-gray-100 rounded-lg p-6">
        <img src={job.image} alt="Job image" className="w-full h-64 object-cover rounded-md mb-4" />
        <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
        <p className="text-lg text-gray-600 mb-4">{job.location}</p>
        <div className="bg-green-200 text-green-800 px-3 py-1 inline-block rounded-lg mb-4">
          Already Applied
        </div>
        <h2 className="text-2xl font-semibold mb-2">About the Role</h2>
        <p className="text-lg mb-4">{job.desc}</p>
        <h2 className="text-2xl font-semibold mb-2">Company</h2>
        <p className="text-lg mb-4">{job.company}</p>
        <div className="flex justify-end space-x-4">
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300">Mark as Read</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Go to Source</button>
        </div>
      </div>
    </div>
  );
};

export const generateMetadata = (params) => {
  return {
    title: `Job Page with ID ${params?.params?.id}`,
  };
};

export async function getServerSideProps(context) {
  const { id } = context.params;
  const job = Data.find(job => job.id === parseInt(id));

  return {
    props: {
      job: job || null,
    },
  };
}

export default JobViewPage;

