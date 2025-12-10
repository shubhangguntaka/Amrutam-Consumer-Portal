import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../../seo/Seo';
import { 
  FiMessageCircle, 
  FiThumbsUp, 
  FiEye, 
  FiClock,
  FiSearch,
  FiFilter,
  FiPlus,
  FiTrendingUp,
  FiUsers,
  FiBookOpen
} from 'react-icons/fi';

// Forum categories
const forumCategories = [
  { id: 'all', name: 'All Topics', icon: <FiBookOpen />, count: 1247 },
  { id: 'hair-care', name: 'Hair Care', icon: '💆‍♀️', count: 324 },
  { id: 'skin-care', name: 'Skin Care', icon: '✨', count: 289 },
  { id: 'wellness', name: 'Wellness', icon: '🌿', count: 412 },
  { id: 'nutrition', name: 'Nutrition', icon: '🥗', count: 156 },
  { id: 'lifestyle', name: 'Lifestyle', icon: '🧘‍♀️', count: 198 },
];

// Forum discussions data
const forumDiscussions = [
  {
    id: 1,
    title: 'Best natural remedies for hair fall?',
    author: 'Priya Sharma',
    avatar: '👩',
    category: 'Hair Care',
    views: 1243,
    replies: 34,
    likes: 89,
    timeAgo: '2 hours ago',
    isTrending: true,
    excerpt: 'I have been experiencing severe hair fall lately. Can someone suggest effective natural remedies or Ayurvedic treatments?',
    tags: ['hair-fall', 'remedies', 'ayurveda']
  },
  {
    id: 2,
    title: 'How to improve digestion naturally?',
    author: 'Rahul Verma',
    avatar: '👨',
    category: 'Wellness',
    views: 892,
    replies: 28,
    likes: 67,
    timeAgo: '5 hours ago',
    isTrending: true,
    excerpt: 'Looking for Ayurvedic tips to improve my digestion. What herbs or practices work best?',
    tags: ['digestion', 'wellness', 'herbs']
  },
  {
    id: 3,
    title: 'Skincare routine for sensitive skin',
    author: 'Anjali Patel',
    avatar: '👩',
    category: 'Skin Care',
    views: 756,
    replies: 19,
    likes: 54,
    timeAgo: '1 day ago',
    isTrending: false,
    excerpt: 'I have very sensitive skin. What natural products would you recommend for daily skincare?',
    tags: ['skincare', 'sensitive-skin', 'routine']
  },
  {
    id: 4,
    title: 'Benefits of Amrutam Gold Malt',
    author: 'Vikram Singh',
    avatar: '👨',
    category: 'Wellness',
    views: 1567,
    replies: 45,
    likes: 112,
    timeAgo: '1 day ago',
    isTrending: true,
    excerpt: 'Has anyone tried Amrutam Gold Malt? Would love to hear about your experiences and results.',
    tags: ['products', 'wellness', 'experience']
  },
  {
    id: 5,
    title: 'Yoga poses for stress relief',
    author: 'Meera Krishnan',
    avatar: '👩',
    category: 'Lifestyle',
    views: 634,
    replies: 23,
    likes: 78,
    timeAgo: '2 days ago',
    isTrending: false,
    excerpt: 'What are the best yoga poses to practice daily for managing stress and anxiety?',
    tags: ['yoga', 'stress', 'mental-health']
  },
  {
    id: 6,
    title: 'Diet tips for glowing skin',
    author: 'Kavita Reddy',
    avatar: '👩',
    category: 'Nutrition',
    views: 923,
    replies: 31,
    likes: 94,
    timeAgo: '3 days ago',
    isTrending: false,
    excerpt: 'What foods should I include in my diet for naturally glowing and healthy skin?',
    tags: ['diet', 'nutrition', 'skin-health']
  },
  {
    id: 7,
    title: 'Ayurvedic immunity boosters',
    author: 'Arjun Gupta',
    avatar: '👨',
    category: 'Wellness',
    views: 1104,
    replies: 38,
    likes: 103,
    timeAgo: '3 days ago',
    isTrending: false,
    excerpt: 'Looking for natural ways to boost immunity. What Ayurvedic herbs are most effective?',
    tags: ['immunity', 'herbs', 'health']
  },
  {
    id: 8,
    title: 'Managing sleep disorders naturally',
    author: 'Deepika Nair',
    avatar: '👩',
    category: 'Wellness',
    views: 812,
    replies: 26,
    likes: 71,
    timeAgo: '4 days ago',
    isTrending: false,
    excerpt: 'Struggling with insomnia. Any natural remedies or practices that have worked for you?',
    tags: ['sleep', 'insomnia', 'remedies']
  }
];

// Trending topics
const trendingTopics = [
  { tag: 'hair-fall', count: 234 },
  { tag: 'ayurveda', count: 189 },
  { tag: 'wellness', count: 167 },
  { tag: 'skincare', count: 143 },
  { tag: 'immunity', count: 128 }
];

// Top contributors
const topContributors = [
  { name: 'Dr. Priya Sharma', avatar: '👨‍⚕️', posts: 156, badge: 'Expert' },
  { name: 'Ayurveda Specialist', avatar: '👩‍⚕️', posts: 134, badge: 'Expert' },
  { name: 'Wellness Coach', avatar: '🧘‍♀️', posts: 98, badge: 'Active' },
  { name: 'Rahul Kumar', avatar: '👨', posts: 87, badge: 'Active' }
];

const Forum = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('trending');

  return (
    <>
      <Seo
        title="Community Forum - Amrutam"
        description="Join our community discussion on Ayurveda, wellness, and natural health"
        keywords="forum, community, ayurveda, wellness, health discussion"
      />

      <div className="min-h-screen bg-[#FFF7E2]">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#3A643B] to-[#2d4f2e] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="font-['Poppins'] text-4xl md:text-5xl font-bold mb-4">
                Community Forum
              </h1>
              <p className="font-['Poppins'] text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Connect with our community, share experiences, and learn about Ayurveda and natural wellness
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search discussions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-white/20 text-gray-900 font-['Poppins']"
                  />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-12">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <FiMessageCircle className="w-6 h-6" />
                    <span className="text-3xl font-bold">1.2K+</span>
                  </div>
                  <p className="text-white/80 font-['Poppins']">Discussions</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <FiUsers className="w-6 h-6" />
                    <span className="text-3xl font-bold">5.4K+</span>
                  </div>
                  <p className="text-white/80 font-['Poppins']">Members</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <FiTrendingUp className="w-6 h-6" />
                    <span className="text-3xl font-bold">8.9K+</span>
                  </div>
                  <p className="text-white/80 font-['Poppins']">Replies</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              {/* Categories */}
              <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
                <h3 className="font-['Poppins'] font-semibold text-lg text-[#2E2F2E] mb-4">
                  Categories
                </h3>
                <div className="space-y-2">
                  {forumCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all font-['Poppins'] ${
                        selectedCategory === category.id
                          ? 'bg-[#3A643B] text-white'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{category.icon}</span>
                        <span className="text-sm font-medium">{category.name}</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        selectedCategory === category.id
                          ? 'bg-white/20'
                          : 'bg-gray-100'
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Trending Topics */}
              <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
                <h3 className="font-['Poppins'] font-semibold text-lg text-[#2E2F2E] mb-4">
                  🔥 Trending Topics
                </h3>
                <div className="space-y-3">
                  {trendingTopics.map((topic) => (
                    <div
                      key={topic.tag}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="font-['Poppins'] text-[#3A643B] hover:underline cursor-pointer">
                        #{topic.tag}
                      </span>
                      <span className="font-['Poppins'] text-gray-500">
                        {topic.count} posts
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Contributors */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-['Poppins'] font-semibold text-lg text-[#2E2F2E] mb-4">
                  ⭐ Top Contributors
                </h3>
                <div className="space-y-4">
                  {topContributors.map((contributor, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="text-2xl">{contributor.avatar}</span>
                      <div className="flex-1">
                        <p className="font-['Poppins'] font-medium text-sm text-[#2E2F2E]">
                          {contributor.name}
                        </p>
                        <p className="font-['Poppins'] text-xs text-gray-500">
                          {contributor.posts} posts
                        </p>
                      </div>
                      <span className="px-2 py-1 bg-[#3A643B]/10 text-[#3A643B] text-xs rounded-full font-['Poppins'] font-medium">
                        {contributor.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* Main Discussion Area */}
            <main className="flex-1">
              {/* Actions Bar */}
              <div className="bg-white rounded-2xl p-4 shadow-sm mb-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#3A643B] text-white rounded-xl hover:bg-[#2d4f2e] transition-colors font-['Poppins'] font-medium">
                      <FiPlus className="w-5 h-5" />
                      New Discussion
                    </button>
                  </div>

                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors font-['Poppins']">
                      <FiFilter className="w-4 h-4" />
                      Filter
                    </button>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3A643B]/20 font-['Poppins']"
                    >
                      <option value="trending">Trending</option>
                      <option value="latest">Latest</option>
                      <option value="popular">Most Popular</option>
                      <option value="unanswered">Unanswered</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Discussion List */}
              <div className="space-y-4">
                {forumDiscussions.map((discussion) => (
                  <div
                    key={discussion.id}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  >
                    {/* Header */}
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3A643B] to-[#2d4f2e] flex items-center justify-center text-2xl">
                          {discussion.avatar}
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        {/* Title and Badges */}
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h3 className="font-['Poppins'] font-semibold text-lg text-[#2E2F2E] hover:text-[#3A643B] transition-colors">
                            {discussion.title}
                          </h3>
                          {discussion.isTrending && (
                            <span className="flex items-center gap-1 px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-['Poppins'] font-medium whitespace-nowrap">
                              <FiTrendingUp className="w-3 h-3" />
                              Trending
                            </span>
                          )}
                        </div>

                        {/* Author Info */}
                        <div className="flex items-center gap-3 mb-3">
                          <span className="font-['Poppins'] text-sm font-medium text-gray-700">
                            {discussion.author}
                          </span>
                          <span className="text-gray-400">•</span>
                          <span className="font-['Poppins'] text-sm text-gray-500">
                            {discussion.timeAgo}
                          </span>
                          <span className="text-gray-400">•</span>
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-['Poppins']">
                            {discussion.category}
                          </span>
                        </div>

                        {/* Excerpt */}
                        <p className="font-['Poppins'] text-gray-600 text-sm mb-4 line-clamp-2">
                          {discussion.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex items-center gap-2 mb-4">
                          {discussion.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-[#3A643B]/5 text-[#3A643B] rounded-lg text-xs font-['Poppins'] hover:bg-[#3A643B]/10 transition-colors cursor-pointer"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>

                        {/* Stats */}
                        <div className="flex items-center gap-6">
                          <div className="flex items-center gap-2 text-gray-600 hover:text-[#3A643B] transition-colors cursor-pointer">
                            <FiThumbsUp className="w-4 h-4" />
                            <span className="font-['Poppins'] text-sm">{discussion.likes}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600 hover:text-[#3A643B] transition-colors cursor-pointer">
                            <FiMessageCircle className="w-4 h-4" />
                            <span className="font-['Poppins'] text-sm">{discussion.replies} replies</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <FiEye className="w-4 h-4" />
                            <span className="font-['Poppins'] text-sm">{discussion.views} views</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-8 flex items-center justify-center gap-2">
                <button className="px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors font-['Poppins']">
                  Previous
                </button>
                <button className="px-4 py-2 bg-[#3A643B] text-white rounded-xl font-['Poppins']">
                  1
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors font-['Poppins']">
                  2
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors font-['Poppins']">
                  3
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors font-['Poppins']">
                  Next
                </button>
              </div>
            </main>

            {/* Right Sidebar */}
            <aside className="lg:w-80 flex-shrink-0">
              {/* Community Guidelines */}
              <div className="bg-gradient-to-br from-[#3A643B] to-[#2d4f2e] text-white rounded-2xl p-6 mb-6">
                <h3 className="font-['Poppins'] font-semibold text-lg mb-4">
                  📋 Community Guidelines
                </h3>
                <ul className="space-y-3 font-['Poppins'] text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-300 mt-1">✓</span>
                    <span>Be respectful and courteous to all members</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-300 mt-1">✓</span>
                    <span>Share accurate health information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-300 mt-1">✓</span>
                    <span>Avoid spam and self-promotion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-300 mt-1">✓</span>
                    <span>Keep discussions relevant to wellness</span>
                  </li>
                </ul>
              </div>

              {/* Related Resources */}
              <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
                <h3 className="font-['Poppins'] font-semibold text-lg text-[#2E2F2E] mb-4">
                  📚 Related Resources
                </h3>
                <div className="space-y-4">
                  <Link
                    to="/products"
                    className="block p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-['Poppins'] font-semibold text-[#2E2F2E] mb-1">
                      Explore Products
                    </h4>
                    <p className="font-['Poppins'] text-sm text-gray-600">
                      Browse our Ayurvedic wellness range
                    </p>
                  </Link>

                  <Link
                    to="/consultations"
                    className="block p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-['Poppins'] font-semibold text-[#2E2F2E] mb-1">
                      Book Consultation
                    </h4>
                    <p className="font-['Poppins'] text-sm text-gray-600">
                      Get personalized health advice
                    </p>
                  </Link>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-['Poppins'] font-semibold text-lg text-[#2E2F2E] mb-2">
                  💌 Stay Updated
                </h3>
                <p className="font-['Poppins'] text-sm text-gray-600 mb-4">
                  Subscribe to get weekly wellness tips and community highlights
                </p>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl mb-3 focus:outline-none focus:ring-2 focus:ring-[#3A643B]/20 font-['Poppins']"
                />
                <button className="w-full px-4 py-3 bg-[#3A643B] text-white rounded-xl hover:bg-[#2d4f2e] transition-colors font-['Poppins'] font-medium">
                  Subscribe
                </button>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forum;
