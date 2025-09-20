import Link from 'next/link'
import { 
  ClockIcon, 
  UserGroupIcon, 
  ChartBarIcon,
  AcademicCapIcon,
  HandRaisedIcon,
  LightBulbIcon,
  ArrowRightIcon,
  StarIcon
} from '@heroicons/react/24/outline'

const valueProps = [
  {
    title: 'Save 12+ Hours Per Week',
    description: 'AI-powered goal generation, automated progress tracking, and smart templates reduce paperwork by 80%.',
    icon: ClockIcon,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    features: ['Automated IEP drafts', 'Smart goal suggestions', 'One-click reports', 'Template library']
  },
  {
    title: 'Support for Every Teacher',
    description: 'Whether you\'re new to special education or a veteran, get the guidance and tools you need.',
    icon: HandRaisedIcon,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    features: ['Expert guidance built-in', 'Compliance checking', 'Best practice tips', '24/7 support']
  },
  {
    title: 'Better Student Outcomes',
    description: 'Data-driven insights and evidence-based recommendations help students reach their full potential.',
    icon: ChartBarIcon,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    features: ['Progress visualization', 'Predictive insights', 'Intervention alerts', 'Family engagement']
  }
]

const testimonials = [
  {
    name: 'Maria Rodriguez',
    role: 'Special Education Teacher',
    school: 'Roosevelt Elementary',
    quote: 'This platform cut my IEP prep time in half. I can focus more on actually teaching my students.',
    rating: 5
  },
  {
    name: 'David Chen',
    role: 'SpEd Coordinator', 
    school: 'Washington Middle School',
    quote: 'Finally, a tool that understands the complexity of special education. Game changer.',
    rating: 5
  }
]

export default function ConceptB() {
  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <div className="-m-1.5 p-1.5 flex items-center space-x-2">
            <AcademicCapIcon className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">IEP Platform</span>
          </div>
        </div>
        <div className="flex lg:flex-1 lg:justify-end">
          <Link href="#beta" className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500">
            Join Beta
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8 pb-24">
        <div className="mx-auto max-w-4xl py-20 sm:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                🎯 Built specifically for Special Education Teachers
              </div>
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
              The IEP Platform That
              <span className="block text-blue-600">Actually Works</span>
            </h1>
            <p className="mt-8 text-xl leading-8 text-gray-600 max-w-2xl mx-auto">
              Stop wrestling with endless paperwork. Our AI-powered platform helps special education 
              teachers create better IEPs faster, with more support for every student.
            </p>
            <div className="mt-12 flex items-center justify-center gap-x-6">
              <Link
                href="#beta"
                className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transform transition hover:scale-105"
              >
                Get Free Beta Access
              </Link>
              <Link href="#features" className="text-lg font-semibold leading-6 text-gray-900 flex items-center">
                See How It Works <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Value Propositions */}
      <div id="features" className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-20">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Why Teachers Love Our Platform
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Three key benefits that transform how you approach IEP development
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {valueProps.map((prop, index) => (
              <div key={prop.title} className="relative">
                <div className={`rounded-2xl border-2 ${prop.borderColor} ${prop.bgColor} p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 h-full`}>
                  {/* Illustration placeholder */}
                  <div className="mb-6 flex justify-center">
                    <div className={`rounded-2xl ${prop.bgColor} p-4 border ${prop.borderColor}`}>
                      <prop.icon className={`h-12 w-12 ${prop.color}`} />
                    </div>
                  </div>
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{prop.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{prop.description}</p>
                  </div>
                  
                  <ul className="space-y-3">
                    {prop.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <div className={`h-2 w-2 rounded-full ${prop.color.replace('text-', 'bg-')} mr-3 flex-shrink-0`}></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by Special Education Teachers
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="rounded-2xl bg-white border border-gray-200 p-8 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-900 mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.school}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-6 text-sm text-gray-600">
              <span className="flex items-center">
                <UserGroupIcon className="h-5 w-5 mr-2 text-green-500" />
                500+ Teachers
              </span>
              <span className="flex items-center">
                <AcademicCapIcon className="h-5 w-5 mr-2 text-blue-500" />
                50+ Schools
              </span>
              <span className="flex items-center">
                <ChartBarIcon className="h-5 w-5 mr-2 text-purple-500" />
                10,000+ IEPs Created
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Beta CTA */}
      <div id="beta" className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 py-24 sm:py-32">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Ready to Transform Your IEP Process?
            </h2>
            <p className="mt-6 text-xl leading-8 text-blue-100">
              Join our beta program and be among the first teachers to experience 
              the future of special education technology. Complete access, zero cost during beta.
            </p>
            <div className="mt-12">
              <Link
                href="#signup"
                className="rounded-xl bg-white px-10 py-4 text-lg font-bold text-blue-600 shadow-xl hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transform transition hover:scale-105"
              >
                Get Your Free Beta Access
              </Link>
              <p className="mt-4 text-sm text-blue-200">
                No credit card required • Full platform access • Priority support
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}