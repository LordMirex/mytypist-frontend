
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  FileText, 
  Search, 
  Filter, 
  Star, 
  Download,
  Eye,
  Grid,
  List
} from 'lucide-react';

const Templates = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = ['All', 'Legal', 'Business', 'HR', 'Finance', 'Marketing', 'Personal'];

  const templates = [
    {
      id: 1,
      name: 'Service Agreement Template',
      category: 'Legal',
      description: 'Professional service agreement with customizable terms',
      rating: 4.8,
      downloads: 1250,
      preview: '/placeholder.svg',
      tags: ['Contract', 'Professional', 'Business']
    },
    {
      id: 2,
      name: 'Invoice Template',
      category: 'Finance',
      description: 'Clean and professional invoice template',
      rating: 4.9,
      downloads: 2100,
      preview: '/placeholder.svg',
      tags: ['Invoice', 'Billing', 'Professional']
    },
    {
      id: 3,
      name: 'Employment Contract',
      category: 'HR',
      description: 'Comprehensive employment contract template',
      rating: 4.7,
      downloads: 890,
      preview: '/placeholder.svg',
      tags: ['Employment', 'HR', 'Legal']
    },
    {
      id: 4,
      name: 'NDA Template',
      category: 'Legal',
      description: 'Non-disclosure agreement for business partnerships',
      rating: 4.8,
      downloads: 1650,
      preview: '/placeholder.svg',
      tags: ['NDA', 'Confidentiality', 'Legal']
    },
    {
      id: 5,
      name: 'Proposal Template',
      category: 'Business',
      description: 'Professional business proposal template',
      rating: 4.6,
      downloads: 970,
      preview: '/placeholder.svg',
      tags: ['Proposal', 'Business', 'Sales']
    },
    {
      id: 6,
      name: 'Marketing Brief',
      category: 'Marketing',
      description: 'Comprehensive marketing campaign brief template',
      rating: 4.5,
      downloads: 650,
      preview: '/placeholder.svg',
      tags: ['Marketing', 'Campaign', 'Strategy']
    }
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 animate-fade-in">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Template Gallery</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose from our collection of professional document templates to get started quickly
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Search and Filter Bar */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-4">
              {/* Category Filter */}
              <div className="flex gap-2 overflow-x-auto">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="whitespace-nowrap"
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="flex border rounded-lg">
                <Button
                  variant={viewMode === 'grid' ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredTemplates.length} template{filteredTemplates.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Templates Grid/List */}
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
            {filteredTemplates.map((template, index) => (
              <Card 
                key={template.id}
                className="hover:shadow-lg transition-shadow animate-slide-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {viewMode === 'grid' ? (
                  <>
                    <div className="relative">
                      <img 
                        src={template.preview} 
                        alt={template.name}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-white text-gray-800">
                          {template.category}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{template.name}</CardTitle>
                      <p className="text-sm text-gray-600">{template.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{template.rating}</span>
                          <span className="text-sm text-gray-500">
                            ({template.downloads} downloads)
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {template.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <Button className="flex-1" size="sm">
                          <FileText className="w-4 h-4 mr-2" />
                          Use Template
                        </Button>
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </>
                ) : (
                  <div className="flex items-center p-6">
                    <img 
                      src={template.preview} 
                      alt={template.name}
                      className="w-20 h-20 object-cover rounded-lg mr-6"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-lg">{template.name}</h3>
                        <Badge>{template.category}</Badge>
                      </div>
                      <p className="text-gray-600 mb-2">{template.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                          {template.rating}
                        </div>
                        <div className="flex items-center">
                          <Download className="w-4 h-4 mr-1" />
                          {template.downloads}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm">
                        <FileText className="w-4 h-4 mr-2" />
                        Use Template
                      </Button>
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {filteredTemplates.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No templates found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Templates;
