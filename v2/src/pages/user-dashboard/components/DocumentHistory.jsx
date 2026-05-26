import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const DocumentHistory = ({ documents }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [selectedDocuments, setSelectedDocuments] = useState([]);

  const documentTypes = [
    { value: 'all', label: 'All Types' },
    { value: 'resume', label: 'Resume' },
    { value: 'cover-letter', label: 'Cover Letter' },
    { value: 'invoice', label: 'Invoice' },
    { value: 'contract', label: 'Contract' },
    { value: 'proposal', label: 'Proposal' },
    { value: 'letter', label: 'Letter' }
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'name', label: 'Name A-Z' },
    { value: 'downloads', label: 'Most Downloaded' }
  ];

  const filteredDocuments = documents?.filter(doc => {
      const matchesSearch = doc?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase());
      const matchesType = filterType === 'all' || doc?.type === filterType;
      return matchesSearch && matchesType;
    })?.sort((a, b) => {
      switch (sortBy) {
        case 'oldest':
          return new Date(a.createdAt) - new Date(b.createdAt);
        case 'name':
          return a?.title?.localeCompare(b?.title);
        case 'downloads':
          return b?.downloadCount - a?.downloadCount;
        default:
          return new Date(b.createdAt) - new Date(a.createdAt);
      }
    });

  const handleSelectDocument = (docId) => {
    setSelectedDocuments(prev => 
      prev?.includes(docId) 
        ? prev?.filter(id => id !== docId)
        : [...prev, docId]
    );
  };

  const handleSelectAll = () => {
    if (selectedDocuments?.length === filteredDocuments?.length) {
      setSelectedDocuments([]);
    } else {
      setSelectedDocuments(filteredDocuments?.map(doc => doc?.id));
    }
  };

  const formatDate = (date) => {
    return new Date(date)?.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getDocumentIcon = (type) => {
    const iconMap = {
      'resume': 'User',
      'cover-letter': 'Mail',
      'invoice': 'Receipt',
      'contract': 'FileText',
      'proposal': 'Briefcase',
      'letter': 'MessageSquare'
    };
    return iconMap?.[type] || 'FileText';
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Icon name="History" size={24} className="text-primary mr-2" />
          <h3 className="text-lg font-semibold text-foreground">Document History</h3>
          <span className="ml-2 px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
            {filteredDocuments?.length} documents
          </span>
        </div>
      </div>
      {/* Search and Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="md:col-span-2">
          <Input
            type="search"
            placeholder="Search documents..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e?.target?.value)}
            className="w-full"
          />
        </div>
        
        <Select
          options={documentTypes}
          value={filterType}
          onChange={setFilterType}
          placeholder="Filter by type"
        />
        
        <Select
          options={sortOptions}
          value={sortBy}
          onChange={setSortBy}
          placeholder="Sort by"
        />
      </div>
      {/* Bulk Actions */}
      {selectedDocuments?.length > 0 && (
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-foreground">
              {selectedDocuments?.length} document{selectedDocuments?.length > 1 ? 's' : ''} selected
            </span>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Icon name="Download" size={14} className="mr-1" />
                Download All
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="Share2" size={14} className="mr-1" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="Trash2" size={14} className="mr-1" />
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}
      {/* Documents List */}
      {filteredDocuments?.length === 0 ? (
        <div className="text-center py-12">
          <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
          <h4 className="text-lg font-medium text-foreground mb-2">No documents found</h4>
          <p className="text-text-secondary mb-4">
            {searchTerm || filterType !== 'all' ?'Try adjusting your search or filters' :'Create your first document to get started'
            }
          </p>
          {!searchTerm && filterType === 'all' && (
            <Link to="/template-gallery">
              <Button variant="default">
                <Icon name="Plus" size={16} className="mr-2" />
                Browse Templates
              </Button>
            </Link>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          {/* Select All Header */}
          <div className="flex items-center justify-between py-2 border-b border-border">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={selectedDocuments?.length === filteredDocuments?.length}
                onChange={handleSelectAll}
                className="mr-2"
              />
              <span className="text-sm text-foreground">Select All</span>
            </label>
            <span className="text-sm text-text-secondary">
              {filteredDocuments?.length} result{filteredDocuments?.length > 1 ? 's' : ''}
            </span>
          </div>

          {/* Documents */}
          {filteredDocuments?.map((doc) => (
            <div key={doc?.id} className="group border border-border rounded-lg p-4 hover:shadow-brand transition-all duration-200">
              <div className="flex items-center space-x-4">
                <label className="flex-shrink-0">
                  <input
                    type="checkbox"
                    checked={selectedDocuments?.includes(doc?.id)}
                    onChange={() => handleSelectDocument(doc?.id)}
                    className="mr-0"
                  />
                </label>

                <div className="w-16 h-20 flex-shrink-0">
                  <Image 
                    src={doc?.thumbnail} 
                    alt={`${doc?.title} preview`}
                    className="w-full h-full object-cover rounded border"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div className="min-w-0 flex-1">
                      <h4 className="font-medium text-foreground text-sm truncate">{doc?.title}</h4>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="flex items-center text-text-secondary text-xs">
                          <Icon name={getDocumentIcon(doc?.type)} size={12} className="mr-1" />
                          {doc?.type}
                        </span>
                        <span className="text-text-secondary text-xs">
                          {formatDate(doc?.createdAt)}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-6 ml-4">
                      <div className="text-right">
                        <div className="flex items-center space-x-4 text-xs text-text-secondary">
                          <span className="flex items-center">
                            <Icon name="Download" size={12} className="mr-1" />
                            {doc?.downloadCount}
                          </span>
                          {doc?.isShared && (
                            <span className="flex items-center text-success">
                              <Icon name="Share2" size={12} className="mr-1" />
                              Shared
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button variant="ghost" size="sm">
                          <Icon name="Download" size={14} />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Icon name="Copy" size={14} />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Icon name="Share2" size={14} />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Icon name="MoreVertical" size={14} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DocumentHistory;