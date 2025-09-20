import Link from 'next/link'
import { 
  ClockIcon, 
  UserGroupIcon, 
  ChartBarIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckCircleIcon 
} from '@heroicons/react/24/outline'

const stats = [
  { name: 'Hours saved per week', value: '12+', icon: ClockIcon },
  { name: 'Student progress improvement', value: '40%', icon: ChartBarIcon },
  { name: 'Teachers supported', value: '500+', icon: UserGroupIcon },
]

const benefits = [
  'Automated IEP goal generation',
  'Real-time progress tracking', 
  'Collaborative team workspace',
  'Compliance reporting built-in'
]

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
          <Link href="#beta" className="text-sm font-semibold leading-6 text-gray-900">
            Join Beta <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>

      {/* Hero Section with Dashboard Preview */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              IEP Development, 
              <span className="text-blue-600"> Streamlined</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Save 12+ hours per week with AI-powered IEP creation, real-time progress tracking, 
              and seamless team collaboration. Built specifically for special education teachers.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="#beta"
                className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Join Beta - Free Access
              </Link>
              <Link href="#demo" className="text-base font-semibold leading-6 text-gray-900">
                Watch Demo <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 blur-3xl opacity-20 -z-10"></div>
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Mock Dashboard Header */}
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">JP</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Sarah Johnson's Dashboard</h3>
                      <p className="text-sm text-gray-600">Lincoln Elementary • 3rd Grade</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                      5 IEPs Complete
                    </div>
                    <div className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
                      3 In Progress
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mock Dashboard Content */}
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Progress Chart Mock */}
                  <div className="col-span-2">
                    <h4 className="font-semibold text-gray-900 mb-4">Student Progress Overview</h4>
                    <div className="bg-gray-50 rounded-lg p-4 h-48 flex items-center justify-center">
                      <div className="text-center">
                        <ChartBarIcon className="h-16 w-16 text-blue-600 mx-auto mb-2" />
                        <p className="text-gray-600">Interactive progress charts</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Quick Actions */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Quick Actions</h4>
                    <div className="space-y-3">
                      {['Create New IEP', 'Generate Report', 'Schedule Meeting', 'Update Goals'].map((action) => (
                        <div key={action} className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                          <span className="text-blue-700 text-sm font-medium">{action}</span>
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
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.name} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need in one platform
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Stop juggling multiple tools. Our integrated platform handles every aspect of IEP development and management.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center space-x-3">
                <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Beta CTA */}
      <div id="beta" className="bg-blue-600 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Join the Beta Program
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Get early access to the platform that's transforming special education. 
              Free during beta period with full support.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="#"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-600 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Sign Up for Beta
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}