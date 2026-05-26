
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: 'The Future of Document Automation: Trends to Watch in 2024',
      excerpt: 'Discover the latest trends in document automation and how they will reshape business workflows in the coming year.',
      author: 'Sarah Johnson',
      date: 'December 10, 2024',
      category: 'Industry Insights',
      readTime: '5 min read',
      featured: true
    },
    {
      id: 2,
      title: 'How E-Signatures Became Legally Binding: A Complete Guide',
      excerpt: 'Understanding the legal framework behind e-signatures and what makes them as valid as traditional pen-and-paper signatures.',
      author: 'Michael Chen',
      date: 'December 8, 2024',
      category: 'Legal',
      readTime: '7 min read',
      featured: false
    },
    {
      id: 3,
      title: 'Reducing Document Processing Time by 90%: Case Study',
      excerpt: 'Learn how TechCorp transformed their contract workflow and saved 20 hours per week using MyTypist.',
      author: 'Emily Rodriguez',
      date: 'December 5, 2024',
      category: 'Case Study',
      readTime: '4 min read',
      featured: false
    },
    {
      id: 4,
      title: 'Security Best Practices for Digital Document Management',
      excerpt: 'Essential security measures every business should implement when handling sensitive documents digitally.',
      author: 'David Kim',
      date: 'December 3, 2024',
      category: 'Security',
      readTime: '6 min read',
      featured: false
    },
    {
      id: 5,
      title: 'Template Design Tips for Professional Documents',
      excerpt: 'Create stunning, professional documents with these expert design tips and best practices.',
      author: 'Lisa Wang',
      date: 'November 28, 2024',
      category: 'Tips & Tricks',
      readTime: '5 min read',
      featured: false
    },
    {
      id: 6,
      title: 'Integration Guide: Connecting MyTypist with Your Existing Tools',
      excerpt: 'Step-by-step instructions for integrating MyTypist with Google Drive, Dropbox, and other popular business tools.',
      author: 'Robert Taylor',
      date: 'November 25, 2024',
      category: 'How-to',
      readTime: '8 min read',
      featured: false
    }
  ];

  const categories = ['All', 'Industry Insights', 'Legal', 'Case Study', 'Security', 'Tips & Tricks', 'How-to'];

  return (
    <Layout>
      <div className="animate-fade-in">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-50 to-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              MyTypist{' '}
              <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-gray-600">
              Stay updated with the latest insights, tips, and trends in document automation and e-signatures.
            </p>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Categories Filter */}
            <div className="flex flex-wrap gap-2 mb-12 justify-center">
              {categories.map((category) => (
                <Badge 
                  key={category}
                  variant={category === 'All' ? 'default' : 'secondary'}
                  className="cursor-pointer hover:bg-brand-100 hover:text-brand-800 px-4 py-2"
                >
                  {category}
                </Badge>
              ))}
            </div>

            {/* Featured Article */}
            {articles.filter(article => article.featured).map((article) => (
              <Card 
                key={article.id}
                className="mb-12 hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <Badge className="mb-4 bg-brand-600">Featured</Badge>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-brand-600 transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-gray-600 mb-6 text-lg">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          {article.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {article.date}
                        </div>
                        <Badge variant="outline">{article.category}</Badge>
                      </div>
                      <div className="flex items-center text-brand-600 font-medium group-hover:text-brand-700">
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-brand-100 to-brand-50 rounded-xl aspect-video flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">📄</div>
                        <p className="text-brand-600 font-medium">Featured Article</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.filter(article => !article.featured).map((article, index) => (
                <Card 
                  key={article.id}
                  className="hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg aspect-video mb-6 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl mb-2">📝</div>
                        <p className="text-gray-500 text-sm">{article.readTime}</p>
                      </div>
                    </div>
                    
                    <Badge variant="outline" className="mb-3">
                      {article.category}
                    </Badge>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {article.date}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-brand-600 font-medium group-hover:text-brand-700">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Load More Articles
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Blog;
