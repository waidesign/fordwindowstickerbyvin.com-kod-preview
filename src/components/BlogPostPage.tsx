import React, { useState } from 'react';
import { Calendar, Clock, ArrowLeft, Share2, ThumbsUp, MessageSquare, Check, Tag, Send, Search, ArrowRight, Cpu, Shield, Wrench } from 'lucide-react';
import { BlogPost, BLOG_POSTS } from '../data/blogData';

interface BlogPostPageProps {
  post: BlogPost;
  onBackToBlog: () => void;
  onSelectPost: (post: BlogPost) => void;
  onNavigateHome: () => void;
  onSearchVin?: (vin: string) => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, onBackToBlog, onSelectPost, onNavigateHome, onSearchVin }) => {
  const [copied, setCopied] = useState(false);
  const [likes, setLikes] = useState(42);
  const [hasLiked, setHasLiked] = useState(false);
  const [comments, setComments] = useState<string[]>([
    "Extremely helpful guide! Helped me verify my 1969 Mach 1 door plate instantly.",
    "Great breakdown of the differences between window stickers and build sheets."
  ]);
  const [newComment, setNewComment] = useState('');
  const [searchTab, setSearchTab] = useState<'vin' | 'plate' | 'year'>('vin');
  const [sidebarVinInput, setSidebarVinInput] = useState('');

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
    } else {
      setLikes(likes - 1);
      setHasLiked(false);
    }
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([newComment.trim(), ...comments]);
      setNewComment('');
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

  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="bg-white text-[#111827] min-h-screen">
      {/* Top Header / Back Bar */}
      <div className="bg-[#EEF4FB] border-b border-[#DCE2E9] py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={onBackToBlog}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#003478] hover:text-[#00285E] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#DCE2E9] text-xs font-semibold text-[#111827] hover:bg-[#F7F9FC] transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#16834B]" /> : <Share2 className="w-3.5 h-3.5 text-[#52606D]" />}
              <span>{copied ? 'Link Copied!' : 'Share Article'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Article Content Container with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Article Content */}
          <article className="lg:col-span-8">
        {/* Meta Header */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#52606D]">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#EEF4FB] text-[#003478] font-bold border border-[#DCE2E9]">
              <Tag className="w-3.5 h-3.5" />
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-[#7B8794]" />
              {post.publishedAt}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-[#7B8794]" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#111827] tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-[#52606D] leading-relaxed font-normal">
            {post.excerpt}
          </p>

          {/* Author Box */}
          <div className="flex items-center justify-between pt-4 pb-6 border-b border-[#DCE2E9]">
            <div className="flex items-center gap-3">
              <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full object-cover border-2 border-[#003478]" />
              <div>
                <div className="text-sm font-bold text-[#111827]">{post.author.name}</div>
                <div className="text-xs text-[#52606D]">{post.author.role}</div>
              </div>
            </div>

            <button
              onClick={handleLike}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                hasLiked
                  ? 'bg-[#003478] text-white border-[#003478]'
                  : 'bg-white text-[#111827] border-[#DCE2E9] hover:bg-[#EEF4FB]'
              }`}
            >
              <ThumbsUp className="w-4 h-4" />
              <span>{likes} Helpful</span>
            </button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="rounded-2xl overflow-hidden mb-10 shadow-lg border border-[#DCE2E9]">
          <img src={post.image} alt={post.title} className="w-full h-72 sm:h-96 object-cover" />
        </div>

        {/* Article Body Paragraphs */}
        <div className="space-y-6 text-base sm:text-lg text-[#334155] leading-relaxed mb-12">
          {post.content.map((paragraph, idx) => (
            <p key={idx}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* Bottom Reaction & Share */}
        <div className="bg-[#EEF4FB] rounded-2xl p-6 sm:p-8 border border-[#DCE2E9] flex flex-col sm:flex-row items-center justify-between gap-4 mb-16">
          <div>
            <h4 className="font-bold text-base text-[#111827] mb-1">Found this guide helpful?</h4>
            <p className="text-xs sm:text-sm text-[#52606D]">Let us know by leaving a like or sharing with fellow car enthusiasts.</p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleLike}
              className={`flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                hasLiked
                  ? 'bg-[#003478] text-white border-[#003478]'
                  : 'bg-white text-[#111827] border-[#DCE2E9] hover:bg-white/80'
              }`}
            >
              👍 {likes} Helpful
            </button>
            <button
              onClick={handleCopyLink}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#003478] text-white hover:bg-[#00285E] transition-all cursor-pointer"
            >
              {copied ? 'Copied Link!' : 'Share Article'}
            </button>
          </div>
        </div>

        {/* Discussion / Comments Section */}
        <div className="border-t border-[#DCE2E9] pt-12 mb-16">
          <div className="flex items-center gap-2 mb-6">
            <MessageSquare className="w-5 h-5 text-[#003478]" />
            <h3 className="text-xl font-bold font-heading text-[#111827]">Discussion ({comments.length})</h3>
          </div>

          <form onSubmit={handleAddComment} className="mb-8 space-y-3">
            <textarea
              rows={3}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Leave a comment or question about this article..."
              className="w-full p-4 rounded-xl border border-[#DCE2E9] focus:outline-none focus:border-[#003478] text-sm text-[#111827]"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#003478] hover:bg-[#00285E] text-white text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Post Comment</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>

          <div className="space-y-4">
            {comments.map((c, i) => (
              <div key={i} className="p-4 rounded-xl bg-[#F7F9FC] border border-[#DCE2E9] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#111827]">Car Enthusiast</span>
                  <span className="text-[11px] text-[#7B8794]">Just now</span>
                </div>
                <p className="text-xs sm:text-sm text-[#52606D]">{c}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Articles */}
        <div className="border-t border-[#DCE2E9] pt-12">
          <h3 className="text-xl font-bold font-heading text-[#111827] mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <div
                key={related.id}
                onClick={() => {
                  onSelectPost(related);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white rounded-xl border border-[#DCE2E9] overflow-hidden shadow-2xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="h-36 overflow-hidden bg-[#F7F9FC]">
                    <img src={related.image} alt={related.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-4 space-y-2">
                    <span className="text-[10px] font-bold text-[#003478] uppercase tracking-wider">{related.category}</span>
                    <h4 className="font-bold text-sm text-[#111827] group-hover:text-[#003478] transition-colors leading-snug line-clamp-2">
                      {related.title}
                    </h4>
                  </div>
                </div>
                <div className="px-4 pb-4 text-xs font-semibold text-[#003478]">
                  Read More →
                </div>
              </div>
            ))}
          </div>
        </div>
          </article>

          {/* Right Column: Sticky Search Window Sticker & Recommended Tools Sidebar */}
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
