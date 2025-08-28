import { Metadata } from "next";
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  TrendingUp, 
  Shield,
  Heart,
  Zap,
  Briefcase,
  MapPin
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | ProDevOpsGuy Tech",
  description: "Learn about ProDevOpsGuy Tech - your premier destination for DevOps and Cloud job opportunities. Discover our mission, values, and commitment to the tech community.",
  keywords: ["about us", "ProDevOpsGuy Tech", "DevOps community", "mission", "values", "team"],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent">
              About ProDevOpsGuy Tech
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Empowering DevOps and Cloud professionals to find their dream opportunities
            </p>
          </div>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 pt-8">
            <div className="flex items-center gap-2 text-lg text-muted-foreground">
              <Users className="w-6 h-6" />
              <span>10,000+ Community Members</span>
            </div>
            <div className="flex items-center gap-2 text-lg text-muted-foreground">
              <Briefcase className="w-6 h-6" />
              <span>1,000+ Job Listings</span>
            </div>
            <div className="flex items-center gap-2 text-lg text-muted-foreground">
              <Globe className="w-6 h-6" />
              <span>50+ Countries</span>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Target className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              To bridge the gap between talented DevOps professionals and innovative companies, 
              creating meaningful connections that drive technological advancement and career growth.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              We believe that every great company deserves exceptional talent, and every talented 
              professional deserves an opportunity to shine.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              To become the world's most trusted platform for DevOps and Cloud professionals, 
              fostering a community where innovation meets opportunity.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              We envision a future where technology professionals can easily find roles that 
              align with their skills, values, and career aspirations.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg dark:shadow-2xl">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Community First
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We prioritize building and nurturing a supportive community where professionals can grow together.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg dark:shadow-2xl">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Trust & Quality
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Every job listing is carefully curated to ensure quality opportunities for our community.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg dark:shadow-2xl">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/40 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We continuously innovate our platform to provide the best experience for job seekers and employers.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg dark:shadow-2xl">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/40 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Global Reach
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We connect talent and opportunities across borders, fostering global collaboration.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg dark:shadow-2xl">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/40 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Excellence
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We strive for excellence in everything we do, from platform features to customer support.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg dark:shadow-2xl">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Collaboration
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We believe in the power of collaboration and partnerships to achieve greater success.
              </p>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Story
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Founded by passionate DevOps professionals who experienced firsthand the challenges 
                of finding the right opportunities in the rapidly evolving tech landscape.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                What started as a simple idea to help fellow professionals has grown into a 
                comprehensive platform that serves thousands of job seekers and hundreds of companies worldwide.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Today, we continue to innovate and expand our services, always keeping our 
                community's needs at the heart of everything we do.
              </p>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10 p-8">
                <div className="h-full w-full rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-blue-600 dark:bg-blue-400 rounded-full flex items-center justify-center mx-auto">
                      <Briefcase className="w-8 h-8 text-white dark:text-gray-900" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 bg-blue-200 dark:bg-blue-800 rounded w-32 mx-auto"></div>
                      <div className="h-3 bg-blue-200 dark:bg-blue-800 rounded w-24 mx-auto"></div>
                      <div className="h-3 bg-blue-200 dark:bg-blue-800 rounded w-28 mx-auto"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Join Our Community
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Whether you're looking for your next opportunity or want to hire top talent, 
            we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
            >
              Browse Jobs
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-semibold rounded-xl transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
