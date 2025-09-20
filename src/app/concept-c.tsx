import Link from 'next/link'
import { 
  ClipboardDocumentCheckIcon,
  ChartBarIcon,
  UserGroupIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  ArrowRightIcon,
  PlayIcon,
  CheckCircleIcon,
  ClockIcon,
  HandRaisedIcon
} from '@heroicons/react/24/outline'

const workflowSteps = [
  {
    step: '01',
    title: 'Smart Assessment',
    description: 'Upload existing data or complete guided assessments. Our AI identifies strengths, needs, and goal areas.',
    icon: ClipboardDocumentCheckIcon,
    color: 'blue',
    features: ['Data import', 'Guided assessments', 'AI analysis']
  },
  {
    step: '02', 
    title: 'Goal Generation',
    description: 'AI suggests evidence-based, measurable goals tailored to each student. Review, edit, and approve.',
    icon: DocumentTextIcon,
    color: 'green',
    features: ['AI-generated goals', 'Standards alignment', 'Measurability check']
  },
  {
    step: '03',
    title: 'Progress Tracking',
    description: 'Real-time data collection with visual dashboards. Automated alerts for interventions.',
    icon: ChartBarIcon,
    color: 'purple',
    features: ['Data visualization', 'Intervention alerts', 'Progress reports']
  },
  {
    step: '04',
    title: 'Team Collaboration',
    description: 'Share insights with parents, administrators, and support staff. Keep everyone aligned.',
    icon: UserGroupIcon,
    color: 'orange',
    features: ['Family portal', 'Team messaging', 'Meeting scheduler']
  }
]

const beforeAfter = [
  {
    label: 'Before IEP Platform',
    items: [
      '20+ hours per IEP',
      'Manual data entry',
      'Compliance guesswork',
      'Scattered information',
      'Limited collaboration'
    ],
    color: 'red'
  },
  {
    label: 'With IEP Platform', 
    items: [
      '8 hours per IEP',
      'Automated workflows',
      'Built-in compliance',
      'Centralized data',
      'Seamless teamwork'
    ],
    color: 'green'
  }
]

const metrics = [
  { value: '60%', label: 'Time Saved', sublabel: 'on IEP development' },
  { value: '95%', label: 'Compliance Rate', sublabel: 'automatic checking' },
  { value: '40%', label: 'Better Outcomes', sublabel: 'data-driven goals' }
]

export default function ConceptC() {
  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 border-b border-gray-100">
        <div className="flex lg:flex-1">
          <div className="-m-1.5 p-1.5 flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <AcademicCapIcon className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">IEP Platform</span>
          </div>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="#workflow" className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600">How It Works</Link>
          <Link href="#benefits" className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600">Benefits</Link>
          <Link href="#beta" className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600">Beta</Link>
        </div>
        <div className="flex lg:flex-1 lg:justify-end">
          <Link href="#beta" className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-500 shadow-sm">
            Join Beta
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative px-6 pt-20 lg:px-8">
        <div className="mx-auto max-w-7xl py-24 sm:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <div className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 border border-blue-200">
                  <PlayIcon className="h-4 w-4 mr-2" />
                  See the complete IEP workflow
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-5xl xl:text-6xl">
                From Assessment to 
                <span className="text-blue-600 block">Success Story</span>
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-600">
                Follow our streamlined 4-step process that transforms how you create, 
                track, and optimize IEPs for every student's success.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="#beta"
                  className="rounded-xl bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-lg hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Start Your Beta Journey
                </Link>
                <Link href="#workflow" className="text-lg font-semibold leading-6 text-gray-900 flex items-center">
                  See the Process <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            
            {/* Visual workflow preview */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 blur-3xl opacity-20 -z-10 transform -rotate-6"></div>
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Your IEP Workflow</h3>
                <div className="space-y-4">
                  {workflowSteps.map((step, index) => (
                    <div key={step.step} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50">
                      <div className={`w-8 h-8 rounded-full bg-${step.color}-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0`}>
                        {step.step}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{step.title}</p>
                        <p className="text-xs text-gray-500">{step.features.join(' • ')}</p>
                      </div>
                      {index < workflowSteps.length - 1 && (
                        <ArrowRightIcon className="h-4 w-4 text-gray-400" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Workflow Steps Detail */}
      <div id="workflow" className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              A Streamlined Process That Actually Works
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Stop struggling with complex workflows. Our 4-step process guides you from initial assessment to ongoing success.
            </p>
          </div>

          <div className="space-y-20">
            {workflowSteps.map((step, index) => (
              <div key={step.step} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-${step.color}-600 text-white text-xl font-bold flex items-center justify-center mr-4`}>
                      {step.step}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">{step.description}</p>
                  <ul className="space-y-3">
                    {step.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <CheckCircleIcon className={`h-5 w-5 text-${step.color}-600 mr-3 flex-shrink-0`} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex-1">
                  <div className={`bg-${step.color}-50 rounded-2xl p-8 border border-${step.color}-200`}>
                    <div className="flex items-center justify-center h-48">
                      <step.icon className={`h-24 w-24 text-${step.color}-600`} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Before vs After */}
      <div id="benefits" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Transform Your IEP Process
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              See the dramatic difference our platform makes in your daily workflow
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {beforeAfter.map((section) => (
              <div key={section.label} className={`rounded-2xl p-8 ${section.color === 'red' ? 'bg-red-50 border border-red-200' : 'bg-green-50 border border-green-200'}`}>
                <h3 className={`text-2xl font-bold mb-8 ${section.color === 'red' ? 'text-red-700' : 'text-green-700'}`}>
                  {section.label}
                </h3>
                <ul className="space-y-4">
                  {section.items.map((item, index) => (
                    <li key={index} className="flex items-center">
                      {section.color === 'red' ? (
                        <div className="h-2 w-2 bg-red-500 rounded-full mr-4 flex-shrink-0"></div>
                      ) : (
                        <CheckCircleIcon className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      )}
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Metrics */}
          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {metrics.map((metric) => (
                <div key={metric.label} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{metric.value}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{metric.label}</div>
                  <div className="text-sm text-gray-600">{metric.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Beta CTA */}
      <div id="beta" className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-24 sm:py-32">
        <div className="absolute inset-0 bg-blue-900 bg-opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Ready to Revolutionize Your IEP Process?
            </h2>
            <p className="mt-6 text-xl leading-8 text-blue-100">
              Join special education teachers who are already transforming their workflows. 
              Get full platform access during our beta period - completely free.
            </p>
            
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="#signup"
                className="w-full sm:w-auto rounded-xl bg-white px-10 py-4 text-lg font-bold text-blue-600 shadow-xl hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transform transition hover:scale-105"
              >
                Get Your Free Beta Access
              </Link>
              <div className="flex items-center space-x-6 text-blue-200 text-sm">
                <span className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 mr-2" />
                  No credit card
                </span>
                <span className="flex items-center">
                  <HandRaisedIcon className="h-5 w-5 mr-2" />
                  Full support
                </span>
                <span className="flex items-center">
                  <ClockIcon className="h-5 w-5 mr-2" />
                  Early access
                </span>
              </div>
            </div>
            
            <p className="mt-8 text-blue-200 text-sm">
              Join 500+ educators already transforming special education
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}