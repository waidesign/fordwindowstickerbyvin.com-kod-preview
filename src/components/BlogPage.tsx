import React, { useState } from 'react';
import { Search, Calendar, Clock, ArrowRight, BookOpen, Tag, Building, DollarSign, Package, Cpu, Shield, Wrench } from 'lucide-react';
import { BLOG_POSTS, BLOG_CATEGORIES, BlogPost } from '../data/blogData';

interface BlogPageProps {
  onSelectPost: (post: BlogPost) => void;
  onNavigateHome: () => void;
  onSearchVin?: (vin: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onSelectPost, onNavigateHome, onSearchVin }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchTab, setSearchTab] = useState<'vin' | 'plate' | 'year'>('vin');
  const [sidebarVinInput, setSidebarVinInput] = useState('');

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Factory Information':
        return <Building className="w-4 h-4 text-[#003478]" />;
      case 'Original MSRP':
        return <DollarSign className="w-4 h-4 text-[#16834B]" />;
      case 'Factory Options':
        return <Package className="w-4 h-4 text-[#003478]" />;
      case 'VIN Decoding':
        return <Cpu className="w-4 h-4 text-[#003478]" />;
      default:
        return <BookOpen className="w-4 h-4 text-[#003478]" />;
    }
  };

  const handleSidebarSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (sidebarVinInput.trim() && onSearchVin) {
      onSearchVin(sidebarVinInput.trim());
    } else {
      onNavigateHome();
    }
  };

  return (
    <div className="bg-[#F8FAFC] text-[#111827] min-h-screen">
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">


        {/* Main Layout Grid with Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Articles & Guides */}
          <div className="lg:col-span-8 space-y-8">
            {/* Filter Bar */}
            <div className="bg-white p-4 rounded-2xl border border-[#DCE2E9] flex flex-wrap items-center justify-between gap-4 shadow-2xs">
              <div className="flex flex-wrap items-center gap-2">
                {BLOG_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      selectedCategory === cat.id
                        ? 'bg-[#003478] text-white shadow-2xs'
                        : 'bg-[#F7F9FC] text-[#52606D] hover:bg-[#EEF4FB] hover:text-[#003478] border border-[#DCE2E9]'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              <div className="text-xs text-[#52606D]">
                <span className="font-bold text-[#111827]">{filteredPosts.length}</span> articles
              </div>
            </div>

            {/* Featured Post (if All or matching category) */}
            {selectedCategory === 'All' && !searchQuery && featuredPost && (
              <div 
                onClick={() => onSelectPost(featuredPost)}
                className="bg-white rounded-2xl border border-[#DCE2E9] overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer grid grid-cols-1 md:grid-cols-12 group"
              >
                <div className="md:col-span-6 relative min-h-[240px] overflow-hidden bg-[#EEF4FB]">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#003478] text-white text-xs font-bold px-3 py-1 rounded-lg shadow-xs">
                    Featured Guide
                  </div>
                </div>

                <div className="md:col-span-6 p-6 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-[11px] text-[#52606D]">
                      <span className="flex items-center gap-1 font-semibold text-[#003478]">
                        <Tag className="w-3 h-3" />
                        {featuredPost.category}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {featuredPost.publishedAt}
                      </span>
                    </div>

                    <h2 className="text-lg sm:text-xl font-bold font-heading text-[#111827] group-hover:text-[#003478] transition-colors leading-snug">
                      {featuredPost.title}
                    </h2>

                    <p className="text-xs text-[#52606D] leading-relaxed line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 flex items-center justify-between border-t border-[#DCE2E9] mt-4">
                    <div className="flex items-center gap-2">
                      <img src={featuredPost.author.avatar} alt={featuredPost.author.name} className="w-7 h-7 rounded-full object-cover border border-[#DCE2E9]" />
                      <span className="text-xs font-bold text-[#111827]">{featuredPost.author.name}</span>
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#003478] group-hover:translate-x-1 transition-transform">
                      Read Article <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  onClick={() => onSelectPost(post)}
                  className="bg-white rounded-2xl border border-[#DCE2E9] overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <div className="relative h-44 overflow-hidden bg-[#EEF4FB]">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[#003478] text-[11px] font-bold px-2.5 py-1 rounded-lg border border-[#DCE2E9]">
                        {post.category}
                      </div>
                    </div>

                    <div className="p-5 space-y-3">
                      <div className="flex items-center gap-3 text-[11px] text-[#52606D]">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.publishedAt}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="font-bold text-base text-[#111827] group-hover:text-[#003478] transition-colors leading-snug">
                        {post.title}
                      </h3>

                      <p className="text-xs text-[#52606D] leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 flex items-center justify-between border-t border-[#DCE2E9] mt-4">
                    <div className="flex items-center gap-2 pt-4">
                      <img src={post.author.avatar} alt={post.author.name} className="w-6 h-6 rounded-full object-cover border border-[#DCE2E9]" />
                      <span className="text-xs font-semibold text-[#111827]">{post.author.name}</span>
                    </div>
                    <span className="text-xs font-bold text-[#003478] group-hover:translate-x-1 transition-transform pt-4">
                      Read →
                    </span>
                  </div>
                </article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16 bg-white rounded-2xl border border-[#DCE2E9] max-w-lg mx-auto shadow-2xs">
                <BookOpen className="w-10 h-10 text-[#7B8794] mx-auto mb-3" />
                <h3 className="text-base font-bold text-[#111827] mb-1">No articles found</h3>
                <p className="text-xs text-[#52606D] mb-4">Try checking another category or clearing your search term.</p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                  className="px-4 py-2 bg-[#003478] text-white text-xs font-bold rounded-xl"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Search Window Sticker & Recommended Tools Sidebar */}
          <div className="lg:col-span-4 space-y-6 sticky top-6 self-start">
            {/* Search Window Sticker Widget Card */}
            <div className="bg-white rounded-2xl border border-[#DCE2E9] p-6 shadow-xs space-y-5">
              <h3 className="text-lg font-bold font-heading text-[#111827]">
                Search Window Sticker
              </h3>

              {/* Tabs */}
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#F7F9FC] rounded-xl border border-[#DCE2E9]">
                <button
                  type="button"
                  onClick={() => setSearchTab('vin')}
                  className={`py-2 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    searchTab === 'vin'
                      ? 'bg-[#003478] text-white shadow-2xs'
                      : 'text-[#52606D] hover:text-[#111827]'
                  }`}
                >
                  By VIN
                </button>
                <button
                  type="button"
                  onClick={() => setSearchTab('plate')}
                  className={`py-2 px-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                    searchTab === 'plate'
                      ? 'bg-[#003478] text-white shadow-2xs'
                      : 'text-[#52606D] hover:text-[#111827]'
                  }`}
                >
                  U.S License
                </button>
                <button
                  type="button"
                  onClick={() => setSearchTab('year')}
                  className={`py-2 px-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                    searchTab === 'year'
                      ? 'bg-[#003478] text-white shadow-2xs'
                      : 'text-[#52606D] hover:text-[#111827]'
                  }`}
                >
                  Year / Model
                </button>
              </div>

              <form onSubmit={handleSidebarSearch} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#111827] uppercase tracking-wider">
                    {searchTab === 'vin' ? 'Enter VIN' : searchTab === 'plate' ? 'License Plate & State' : 'Year, Make & Model'}
                  </label>
                  <input
                    type="text"
                    value={sidebarVinInput}
                    onChange={(e) => setSidebarVinInput(e.target.value)}
                    placeholder={
                      searchTab === 'vin'
                        ? 'Enter 17-character VIN...'
                        : searchTab === 'plate'
                        ? 'e.g. ABC1234 (CA)'
                        : 'e.g. 2023 Ford F-150'
                    }
                    className="w-full px-3.5 py-3 rounded-xl border border-[#DCE2E9] focus:outline-none focus:border-[#003478] text-xs sm:text-sm text-[#111827] placeholder-[#7B8794]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#003478] hover:bg-[#00285E] text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-sm cursor-pointer flex items-center justify-center gap-2"
                >
                  <Search className="w-4 h-4" />
                  <span>{searchTab === 'vin' ? 'Search VIN' : 'Search Vehicle'}</span>
                </button>
              </form>
            </div>

            {/* Recommended VIN Lookup Tools Card */}
            <div className="bg-white rounded-2xl border border-[#DCE2E9] p-6 shadow-xs space-y-4">
              <h3 className="text-base font-bold font-heading text-[#111827]">
                Recommended VIN Lookup Tools
              </h3>

              <div className="space-y-2">
                <button
                  onClick={onNavigateHome}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-[#F7F9FC] hover:bg-[#EEF4FB] border border-[#DCE2E9] text-left transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white border border-[#DCE2E9] flex items-center justify-center text-[#003478]">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#111827] group-hover:text-[#003478]">VIN Decoder</div>
                      <div className="text-[11px] text-[#52606D]">Instant factory specs</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#7B8794] group-hover:text-[#003478] group-hover:translate-x-0.5 transition-all" />
                </button>

                <button
                  onClick={onNavigateHome}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-[#F7F9FC] hover:bg-[#EEF4FB] border border-[#DCE2E9] text-left transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white border border-[#DCE2E9] flex items-center justify-center text-[#003478]">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#111827] group-hover:text-[#003478]">Warranty Check</div>
                      <div className="text-[11px] text-[#52606D]">Factory coverage status</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#7B8794] group-hover:text-[#003478] group-hover:translate-x-0.5 transition-all" />
                </button>

                <button
                  onClick={onNavigateHome}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-[#F7F9FC] hover:bg-[#EEF4FB] border border-[#DCE2E9] text-left transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white border border-[#DCE2E9] flex items-center justify-center text-[#003478]">
                      <Wrench className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#111827] group-hover:text-[#003478]">Paint Code</div>
                      <div className="text-[11px] text-[#52606D]">Original exterior color lookup</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#7B8794] group-hover:text-[#003478] group-hover:translate-x-0.5 transition-all" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
