import React from 'react';
import Header from '../components/Header';
import { Award, Database, BookOpen, CheckCircle, AlertTriangle } from 'lucide-react';
import EndFooter from '../components/EndFooter';

function PublicationIndexingPage() {
  return (
    <div>
      <Header />
      <div className="relative bg-[#312e81] bg-[url('https://www.transparenttextures.com/patterns/elegant-grid.png')] text-white py-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-700/50 rounded-full px-4 py-1 mb-6 border border-blue-400/30 backdrop-blur-md">
            <Award className="w-4 h-4 text-blue-200" />
            <span className="text-xs font-semibold tracking-wider uppercase text-blue-100">Publication & Indexing</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Publication & Indexing</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light">
            Ensuring your research reaches the global academic community through prestigious publication channels.
          </p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <div className="bg-indigo-50 p-8 rounded-lg border-l-4 border-indigo-500">
              <div className="flex items-start gap-4">
                <BookOpen className="w-8 h-8 text-indigo-600 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-indigo-900">Publisher</h2>
                  <p className="text-lg text-indigo-800 font-semibold">IEEE</p>
                  <p className="text-gray-700 mt-2">
                    The conference proceedings will be published by IEEE, ensuring high-quality publication standards and global accessibility.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <Database className="w-8 h-8 text-green-600 mt-1" />
                <div className="w-full">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">Indexing Status</h2>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <CheckCircle className="w-6 h-6 text-green-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">Scopus</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Papers will be submitted for possible inclusion subject to quality review.
                      </p>
                      <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                        Submitted
                      </span>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <CheckCircle className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">IEEE Xplore</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Papers will be submitted for possible inclusion subject to quality review.
                      </p>
                      <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                        Submitted
                      </span>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <CheckCircle className="w-6 h-6 text-purple-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">Springer</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Papers will be submitted for possible inclusion subject to quality review.
                      </p>
                      <span className="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">
                        Submitted
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-8 rounded-lg border-l-4 border-yellow-500">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-yellow-600 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-yellow-900">Important Notice</h2>
                  <p className="text-yellow-800 mb-4">
                    While we strive for inclusion in these prestigious databases, final acceptance depends on the quality review process conducted by each indexing service. We cannot guarantee inclusion.
                  </p>
                  <ul className="space-y-2 text-yellow-800">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-0.5">•</span>
                      Acceptance rates vary by database and submission quality
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-0.5">•</span>
                      Indexing decisions are made independently by each service
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-0.5">•</span>
                      We will notify authors of indexing outcomes as they become available
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Publication Process</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">Pre-Conference</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      Paper submission and review
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      Camera-ready paper preparation
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      Copyright form submission
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">Post-Conference</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      Proceedings publication by IEEE
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      Submission to indexing databases
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      DOI assignment for all papers
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <EndFooter />
    </div>
  );
}

export default PublicationIndexingPage;