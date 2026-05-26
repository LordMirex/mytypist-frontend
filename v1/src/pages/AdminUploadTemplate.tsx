
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Upload,
  FileText,
  Save,
  Eye,
  Shield,
  X,
  Plus,
  Settings
} from 'lucide-react';

const AdminUploadTemplate = () => {
  const [templateName, setTemplateName] = useState('');
  const [templateDescription, setTemplateDescription] = useState('');
  const [templateCategory, setTemplateCategory] = useState('');
  const [templateContent, setTemplateContent] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState('');
  const [isPublic, setIsPublic] = useState(true);

  const categories = [
    'Legal Documents',
    'Business Contracts',
    'Invoices & Billing', 
    'HR Documents',
    'Marketing Materials',
    'Technical Documentation'
  ];

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <Layout showFooter={false}>
      <div className="min-h-screen bg-gray-50 animate-fade-in">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h1 className="text-xl lg:text-2xl font-bold text-gray-900 flex items-center">
                  <Shield className="w-5 h-5 lg:w-6 lg:h-6 mr-2 text-red-600" />
                  Upload Template
                </h1>
                <p className="text-sm lg:text-base text-gray-600 mt-1">
                  Create and upload new document templates for users
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 lg:gap-3">
                <Button variant="outline" size="sm" className="w-full sm:w-auto">
                  <Eye className="w-4 h-4 mr-2" />
                  Preview
                </Button>
                <Button variant="outline" size="sm" className="w-full sm:w-auto">
                  <Save className="w-4 h-4 mr-2" />
                  Save Draft
                </Button>
                <Button className="bg-red-600 hover:bg-red-700 w-full sm:w-auto" size="sm">
                  <Upload className="w-4 h-4 mr-2" />
                  Publish Template
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 lg:gap-8">
            {/* Sidebar - Settings */}
            <div className="xl:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Settings className="w-5 h-5 mr-2" />
                    Template Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="name">Template Name</Label>
                    <Input
                      id="name"
                      value={templateName}
                      onChange={(e) => setTemplateName(e.target.value)}
                      placeholder="Enter template name"
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={templateDescription}
                      onChange={(e) => setTemplateDescription(e.target.value)}
                      placeholder="Describe this template..."
                      className="mt-1"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="category">Category</Label>
                    <select
                      id="category"
                      value={templateCategory}
                      onChange={(e) => setTemplateCategory(e.target.value)}
                      className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      <option value="">Select a category</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label>Tags</Label>
                    <div className="mt-1 space-y-2">
                      <div className="flex gap-2">
                        <Input
                          value={newTag}
                          onChange={(e) => setNewTag(e.target.value)}
                          placeholder="Add tag"
                          onKeyPress={(e) => e.key === 'Enter' && addTag()}
                          className="flex-1"
                        />
                        <Button onClick={addTag} size="sm" variant="outline">
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                            <button
                              onClick={() => removeTag(tag)}
                              className="ml-1 hover:text-red-600"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="public"
                      checked={isPublic}
                      onChange={(e) => setIsPublic(e.target.checked)}
                      className="rounded border-gray-300"
                    />
                    <Label htmlFor="public" className="text-sm">
                      Make this template public
                    </Label>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Upload */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Upload</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-red-400 transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-2">
                        Drop files here or click to browse
                      </p>
                      <p className="text-xs text-gray-500">
                        Supports .docx, .pdf, .txt files
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Editor */}
            <div className="xl:col-span-3">
              <Card className="h-full">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <CardTitle className="text-lg lg:text-xl">Template Editor</CardTitle>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button variant="outline" size="sm" className="w-full sm:w-auto">
                        <FileText className="w-4 h-4 mr-2" />
                        Load Existing
                      </Button>
                      <Button variant="outline" size="sm" className="w-full sm:w-auto">
                        <Settings className="w-4 h-4 mr-2" />
                        Formatting
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="min-h-[600px] lg:min-h-[700px]">
                    <Textarea
                      value={templateContent}
                      onChange={(e) => setTemplateContent(e.target.value)}
                      placeholder="Start typing your template content here...

You can use placeholders like:
- {{company_name}} for dynamic company name
- {{client_name}} for client information  
- {{date}} for current date
- {{signature}} for signature fields

This will be replaced with actual values when users create documents from this template."
                      className="min-h-[580px] lg:min-h-[680px] text-sm font-mono resize-none"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminUploadTemplate;
