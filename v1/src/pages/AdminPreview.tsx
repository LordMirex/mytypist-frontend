
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  FileText, 
  Search, 
  Eye, 
  Download, 
  Share2, 
  Filter,
  Calendar,
  User,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react';

const AdminPreview = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDocument, setSelectedDocument] = useState<number | null>(null);

  const documents = [
    {
      id: 1,
      title: 'Service Agreement - TechCorp',
      type: 'Contract',
      owner: 'John Doe',
      status: 'Pending Review',
      createdAt: '2024-12-10',
      size: '2.4 MB',
      pages: 12,
      signatures: 2,
      priority: 'high'
    },
    {
      id: 2,
      title: 'Invoice #2024-001',
      type: 'Invoice',
      owner: 'Jane Smith',
      status: 'Approved',
      createdAt: '2024-12-08',
      size: '1.2 MB',
      pages: 3,
      signatures: 1,
      priority: 'normal'
    },
    {
      id: 3,
      title: 'NDA - New Client Partnership',
      type: 'Legal',
      owner: 'Mike Johnson',
      status: 'Flagged',
      createdAt: '2024-12-07',
      size: '3.1 MB',
      pages: 8,
      signatures: 0,
      priority: 'urgent'
    },
    {
      id: 4,
      title: 'Proposal - Website Redesign',
      type: 'Proposal',
      owner: 'Sarah Wilson',
      status: 'Under Review',
      createdAt: '2024-12-05',
      size: '5.8 MB',
      pages: 24,
      signatures: 3,
      priority: 'normal'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-800';
      case 'Pending Review':
      case 'Under Review':
        return 'bg-yellow-100 text-yellow-800';
      case 'Flagged':
        return 'bg-red-100 text-red-800';
      case 'Rejected':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return 'bg-red-100 text-red-800';
      case 'high':
        return 'bg-orange-100 text-orange-800';
      case 'normal':
        return 'bg-blue-100 text-blue-800';
      case 'low':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Approved':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'Flagged':
      case 'Rejected':
        return <XCircle className="w-4 h-4 text-red-600" />;
      default:
        return <AlertCircle className="w-4 h-4 text-yellow-600" />;
    }
  };

  return (
    <Layout showFooter={false}>
      <div className="min-h-screen bg-gray-50 animate-fade-in">
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                  <Eye className="w-6 h-6 mr-2 text-red-600" />
                  Document Preview & Review
                </h1>
                <p className="text-gray-600 mt-1">
                  Review and moderate user-generated documents
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter Documents
                </Button>
                <Button className="bg-red-600 hover:bg-red-700" size="sm">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Bulk Approve
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Documents List */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <CardTitle>Documents Awaiting Review</CardTitle>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        placeholder="Search documents..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-9 w-full sm:w-64"
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {documents.map((doc, index) => (
                      <div 
                        key={doc.id}
                        className={`border rounded-lg p-4 cursor-pointer transition-all hover:shadow-md animate-slide-in ${
                          selectedDocument === doc.id ? 'border-red-300 bg-red-50' : 'border-gray-200'
                        }`}
                        style={{ animationDelay: `${index * 100}ms` }}
                        onClick={() => setSelectedDocument(doc.id)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <FileText className="w-5 h-5 text-gray-600" />
                              <h3 className="font-semibold text-gray-900">{doc.title}</h3>
                              <Badge variant="outline">{doc.type}</Badge>
                            </div>
                            
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                              <div className="flex items-center">
                                <User className="w-4 h-4 mr-1" />
                                {doc.owner}
                              </div>
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                {doc.createdAt}
                              </div>
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {doc.pages} pages
                              </div>
                            </div>

                            <div className="flex items-center space-x-2">
                              <Badge className={getStatusColor(doc.status)}>
                                <div className="flex items-center">
                                  {getStatusIcon(doc.status)}
                                  <span className="ml-1">{doc.status}</span>
                                </div>
                              </Badge>
                              <Badge className={getPriorityColor(doc.priority)}>
                                {doc.priority}
                              </Badge>
                            </div>
                          </div>

                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Share2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Document Preview */}
            <div>
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle>Document Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  {selectedDocument ? (
                    <div className="space-y-4">
                      <div className="bg-gray-100 rounded-lg p-6 min-h-64 flex items-center justify-center">
                        <div className="text-center">
                          <FileText className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                          <p className="text-gray-600">Document Preview</p>
                          <p className="text-sm text-gray-500">
                            {documents.find(d => d.id === selectedDocument)?.title}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Button className="w-full bg-green-600 hover:bg-green-700">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Approve Document
                        </Button>
                        <Button variant="outline" className="w-full text-yellow-600 border-yellow-300">
                          <AlertCircle className="w-4 h-4 mr-2" />
                          Request Changes
                        </Button>
                        <Button variant="outline" className="w-full text-red-600 border-red-300">
                          <XCircle className="w-4 h-4 mr-2" />
                          Reject Document
                        </Button>
                      </div>

                      <div className="border-t pt-4">
                        <h4 className="font-medium mb-2">Document Details</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Size:</span>
                            <span>{documents.find(d => d.id === selectedDocument)?.size}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Pages:</span>
                            <span>{documents.find(d => d.id === selectedDocument)?.pages}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Signatures:</span>
                            <span>{documents.find(d => d.id === selectedDocument)?.signatures}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                      <p className="text-gray-500">Select a document to preview</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminPreview;
