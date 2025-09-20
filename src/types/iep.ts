// Core types for IEP Platform

export interface Student {
  id: string
  firstName: string
  lastName: string
  dateOfBirth: Date
  grade: string
  schoolId: string
  disability?: DisabilityCategory
  iepStatus: IEPStatus
  createdAt: Date
  updatedAt: Date
}

export interface IEP {
  id: string
  studentId: string
  startDate: Date
  endDate: Date
  status: IEPStatus
  goals: IEPGoal[]
  services: RelatedService[]
  accommodations: Accommodation[]
  modifications: Modification[]
  assessments: Assessment[]
  teamMembers: TeamMember[]
  createdAt: Date
  updatedAt: Date
}

export interface IEPGoal {
  id: string
  iepId: string
  domain: GoalDomain
  description: string
  measurableObjective: string
  targetCriteria: string
  timeline: string
  progressData: ProgressData[]
  status: GoalStatus
  createdAt: Date
  updatedAt: Date
}

export interface Assessment {
  id: string
  studentId: string
  type: AssessmentType
  name: string
  dateAdministered: Date
  results: AssessmentResult[]
  administererId: string
  notes?: string
  createdAt: Date
  updatedAt: Date
}

export interface TeamMember {
  id: string
  userId: string
  role: TeamMemberRole
  name: string
  email: string
  isLead?: boolean
}

export interface ProgressData {
  id: string
  goalId: string
  date: Date
  score: number
  notes?: string
  recordedById: string
}

export interface RelatedService {
  id: string
  type: ServiceType
  frequency: string
  duration: number
  location: string
  providerId: string
}

export interface Accommodation {
  id: string
  category: AccommodationCategory
  description: string
  environment: EnvironmentType[]
}

export interface Modification {
  id: string
  category: ModificationCategory
  description: string
  subject?: string
}

export interface AssessmentResult {
  domain: string
  score: number
  percentile?: number
  standardScore?: number
  notes?: string
}

// Enums
export enum IEPStatus {
  DRAFT = 'draft',
  ACTIVE = 'active',
  EXPIRED = 'expired',
  TRANSITIONING = 'transitioning',
  COMPLETED = 'completed'
}

export enum GoalStatus {
  NOT_STARTED = 'not_started',
  IN_PROGRESS = 'in_progress',
  MASTERED = 'mastered',
  DISCONTINUED = 'discontinued'
}

export enum GoalDomain {
  ACADEMIC = 'academic',
  BEHAVIORAL = 'behavioral',
  SOCIAL = 'social',
  COMMUNICATION = 'communication',
  MOTOR = 'motor',
  VOCATIONAL = 'vocational',
  TRANSITION = 'transition'
}

export enum DisabilityCategory {
  AUTISM = 'autism',
  DEAF_BLIND = 'deaf_blind',
  DEVELOPMENTAL_DELAY = 'developmental_delay',
  EMOTIONAL_DISTURBANCE = 'emotional_disturbance',
  HEARING_IMPAIRMENT = 'hearing_impairment',
  INTELLECTUAL_DISABILITY = 'intellectual_disability',
  MULTIPLE_DISABILITIES = 'multiple_disabilities',
  ORTHOPEDIC_IMPAIRMENT = 'orthopedic_impairment',
  OTHER_HEALTH_IMPAIRMENT = 'other_health_impairment',
  SPECIFIC_LEARNING_DISABILITY = 'specific_learning_disability',
  SPEECH_LANGUAGE_IMPAIRMENT = 'speech_language_impairment',
  TRAUMATIC_BRAIN_INJURY = 'traumatic_brain_injury',
  VISUAL_IMPAIRMENT = 'visual_impairment'
}

export enum AssessmentType {
  COGNITIVE = 'cognitive',
  ACADEMIC = 'academic',
  BEHAVIORAL = 'behavioral',
  SPEECH_LANGUAGE = 'speech_language',
  OCCUPATIONAL_THERAPY = 'occupational_therapy',
  PHYSICAL_THERAPY = 'physical_therapy',
  PSYCHOLOGICAL = 'psychological',
  FUNCTIONAL = 'functional'
}

export enum TeamMemberRole {
  SPECIAL_EDUCATION_TEACHER = 'special_education_teacher',
  GENERAL_EDUCATION_TEACHER = 'general_education_teacher',
  SCHOOL_PSYCHOLOGIST = 'school_psychologist',
  SPEECH_THERAPIST = 'speech_therapist',
  OCCUPATIONAL_THERAPIST = 'occupational_therapist',
  PHYSICAL_THERAPIST = 'physical_therapist',
  PARENT_GUARDIAN = 'parent_guardian',
  ADMINISTRATOR = 'administrator',
  RELATED_SERVICES = 'related_services',
  STUDENT = 'student'
}

export enum ServiceType {
  SPEECH_THERAPY = 'speech_therapy',
  OCCUPATIONAL_THERAPY = 'occupational_therapy',
  PHYSICAL_THERAPY = 'physical_therapy',
  COUNSELING = 'counseling',
  TRANSPORTATION = 'transportation',
  NURSING = 'nursing',
  ASSISTIVE_TECHNOLOGY = 'assistive_technology'
}

export enum AccommodationCategory {
  PRESENTATION = 'presentation',
  RESPONSE = 'response',
  TIMING = 'timing',
  SETTING = 'setting'
}

export enum ModificationCategory {
  CURRICULUM = 'curriculum',
  INSTRUCTION = 'instruction',
  ASSESSMENT = 'assessment'
}

export enum EnvironmentType {
  GENERAL_EDUCATION = 'general_education',
  SPECIAL_EDUCATION = 'special_education',
  TESTING = 'testing',
  ALL_ENVIRONMENTS = 'all_environments'
}