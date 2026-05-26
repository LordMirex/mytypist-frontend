
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Upload, 
  Save, 
  Send, 
  Eye,
  Settings,
  Plus,
  X
} from 'lucide-react';

const CreateDocument = () => {
  const [documentTitle, setDocumentTitle] = useState('');
  const [documentContent, setDocumentContent] = useState('');
  const [recipients, setRecipients] = useState<string[]>(['']);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('create');

  const templates = [
    { id: 'blank', name: 'Blank Document', description: 'Start from scratch' },
    { id: 'contract', name: 'Service Contract', description: 'Professional service agreement' },
    { id: 'invoice', name: 'Invoice', description: 'Business invoice template' },
    { id: 'nda', name: 'NDA', description: 'Non-disclosure agreement' },
    { id: 'proposal', name: 'Proposal', description: 'Business proposal template' }
  ];

  const addRecipient = () => {
    setRecipients([...recipients, '']);
  };

  const removeRecipient = (index: number) => {
    setRecipients(recipients.filter((_, i) => i !== index));
  };

  const updateRecipient = (index: number, value: string) => {
    const updated = [...recipients];
    updated[index] = value;
    setRecipients(updated);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 animate-fade-in">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Create Document</h1>
                <p className="text-gray-600">Create a new document from scratch or use a template</p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline">
                  <Eye className="w-4 h-4 mr-2" />
                  Preview
                </Button>
                <Button variant="outline">
                  <Save className="w-4 h-4 mr-2" />
                  Save Draft
                </Button>
                <Button className="bg-brand-600 hover:bg-brand-700">
                  <Send className="w-4 h-4 mr-2" />
                  Send for Signature
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Templates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {templates.map((template) => (
                      <button
                        key={template.id}
                        onClick={() => setSelectedTemplate(template.id)}
                        className={`w-full text-left p-3 rounded-lg border transition-colors ${
                          selectedTemplate === template.id
                            ? 'border-brand-500 bg-brand-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-medium text-sm">{template.name}</div>
                        <div className="text-xs text-gray-500 mt-1">{template.description}</div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">Document Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="title">Document Title</Label>
                      <Input
                        id="title"
                        value={documentTitle}
                        onChange={(e) => setDocumentTitle(e.target.value)}
                        placeholder="Enter document title"
                      />
                    </div>
                    
                    <div>
                      <Label>Recipients</Label>
                      <div className="space-y-2 mt-2">
                        {recipients.map((recipient, index) => (
                          <div key={index} className="flex gap-2">
                            <Input
                              value={recipient}
                              onChange={(e) => updateRecipient(index, e.target.value)}
                              placeholder="Enter email address"
                            />
                            {recipients.length > 1 && (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => removeRecipient(index)}
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                        ))}
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={addRecipient}
                          className="w-full"
                        >
                          <Plus className="w-4 h-4 mr-2" />
                          Add Recipient
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Document Editor</CardTitle>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Upload className="w-4 h-4 mr-2" />
                        Upload File
                      </Button>
                      <Button variant="outline" size="sm">
                        <Settings className="w-4 h-4 mr-2" />
                        Formatting
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="min-h-[600px]">
                    {selectedTemplate && selectedTemplate !== 'blank' ? (
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-4">
                          <FileText className="w-5 h-5 text-brand-600" />
                          <span className="font-medium">
                            Using template: {templates.find(t => t.id === selectedTemplate)?.name}
                          </span>
                          <Badge variant="secondary">Template</Badge>
                        </div>
                        <Textarea
                          value={documentContent}
                          onChange={(e) => setDocumentContent(e.target.value)}
                          placeholder="Template content will be loaded here. You can edit and customize it as needed."
                          className="min-h-[500px] font-mono text-sm"
                        />
                      </div>
                    ) : (
                      <div className="text-center py-20">
                        <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                          Start Creating Your Document
                        </h3>
                        <p className="text-gray-500 mb-6">
                          Select a template from the sidebar or upload a file to get started
                        </p>
                        <div className="flex gap-4 justify-center">
                          <Button onClick={() => setSelectedTemplate('blank')}>
                            <FileText className="w-4 h-4 mr-2" />
                            Start Blank Document
                          </Button>
                          <Button variant="outline">
                            <Upload className="w-4 h-4 mr-2" />
                            Upload Document
                          </Button>
                        </div>
                      </div>
                    )}

                    {selectedTemplate === 'blank' && (
                      <Textarea
                        value={documentContent}
                        onChange={(e) => setDocumentContent(e.target.value)}
                        placeholder="Start typing your document content here..."
                        className="min-h-[500px] text-sm"
                      />
                    )}
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

export default CreateDocument;
