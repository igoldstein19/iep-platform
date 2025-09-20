import React from "react";
import {
  ClockIcon,
  UserGroupIcon,
  ChartBarIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const stats = [
  { name: "Hours saved per week", value: "12+", icon: ClockIcon },
  { name: "Student progress improvement", value: "40%", icon: ChartBarIcon },
  { name: "Teachers supported", value: "500+", icon: UserGroupIcon },
];

const benefits = [
  "Automated IEP goal generation",
  "Real-time progress tracking",
  "Collaborative team workspace",
  "Compliance reporting built-in",
];

export default function ConceptA() {
  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <div className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-gray-900">IEP Platform</span>
          </div>
        </div>
        <div className="flex lg:flex-1 lg:justify-end">
          <a href="#beta" className="text-sm font-semibold leading-6 text-gray-900">
            Join Beta <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

      {/* Hero Section with Dashboard Preview */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl leading-tight">
              Transform IEP Development with
              <span className="text-blue-600"> AI-Powered Tools</span>
            </h1>
            <p className="mt-8 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
              Streamline your IEP workflow with intelligent automation, collaborative tools, 
              and data-driven insights. Save hours every week while improving student outcomes.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a
                href="#beta"
                className="w-full sm:w-auto rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-blue-500 hover:shadow-xl transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Start Free Trial
              </a>
              <a href="#demo" className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-gray-700 shadow-sm hover:bg-gray-50 hover:shadow-md transition-all duration-200">
                <span>Watch Demo</span>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-6V7a2 2 0 00-2-2H5a2 2 0 00-2 2v3m14 0v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6m14 0H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 blur-3xl opacity-10 -z-10" />
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden backdrop-blur-sm">
              {/* Mock Dashboard Header */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-8 py-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-md">
                      <span className="text-white text-lg font-bold">SJ</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Sarah Johnson's Dashboard</h3>
                      <p className="text-gray-600">Lincoln Elementary • 3rd Grade</p>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <div className="px-4 py-2 bg-green-100 text-green-800 rounded-xl text-sm font-medium shadow-sm">
                      ✓ 5 IEPs Complete
                    </div>
                    <div className="px-4 py-2 bg-amber-100 text-amber-800 rounded-xl text-sm font-medium shadow-sm">
                      ⏳ 3 In Progress
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mock Dashboard Content */}
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Progress Chart Mock */}
                  <div className="col-span-2">
                    <h4 className="text-lg font-bold text-gray-900 mb-6">Student Progress Overview</h4>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 h-56 flex items-center justify-center border border-blue-100 shadow-sm">
                      <div className="text-center">
                        <ChartBarIcon className="h-20 w-20 text-blue-600 mx-auto mb-4" />
                        <p className="text-gray-700 font-medium">Interactive Progress Analytics</p>
                        <p className="text-gray-500 text-sm mt-2">Real-time data visualization</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Quick Actions */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-6">Quick Actions</h4>
                    <div className="space-y-4">
                      {["Create New IEP", "Generate Report", "Schedule Meeting", "Update Goals"].map((action) => (
                        <div key={action} className="p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md hover:border-blue-200 transition-all duration-200 cursor-pointer">
                          <span className="text-gray-800 font-medium">{action}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-24 sm:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Trusted by educators nationwide
            </h2>
            <p className="text-lg text-gray-600">Real impact, measurable results</p>
          </div>
          <dl className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.name} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-blue-600" />
                </div>
                <dd className="text-4xl font-bold tracking-tight text-gray-900 mb-2">
                  {stat.value}
                </dd>
                <dt className="text-base font-medium text-gray-600">{stat.name}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Everything you need in one platform
            </h2>
            <p className="mt-6 text-xl text-gray-600">
              Stop juggling multiple tools. Our integrated platform handles every aspect of IEP development and management.
            </p>
          </div>
          <div className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const icons = [SparklesIcon, ClockIcon, UserGroupIcon, CheckCircleIcon];
              const IconComponent = icons[index];
              return (
                <div key={benefit} className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-2xl">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 text-center">{benefit}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Beta CTA */}
      <div id="beta" className="relative bg-gradient-to-br from-blue-600 to-indigo-700 py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Ready to Transform Your IEP Workflow?
            </h2>
            <p className="mt-8 text-xl text-blue-100 max-w-2xl mx-auto">
              Join thousands of educators who are saving time and improving outcomes with our platform.
              Start your free trial today.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a
                href="#"
                className="w-full sm:w-auto rounded-2xl bg-white px-10 py-4 text-lg font-bold text-blue-600 shadow-xl hover:bg-gray-50 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Start Free Trial
              </a>
              <a
                href="#demo"
                className="w-full sm:w-auto rounded-2xl border-2 border-white/30 bg-white/10 backdrop-blur px-10 py-4 text-lg font-semibold text-white shadow-xl hover:bg-white/20 transition-all duration-200"
              >
                Schedule Demo
              </a>
            </div>
            <p className="mt-6 text-sm text-blue-200">
              No credit card required • Full access during trial • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
