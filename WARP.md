# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

The IEP Platform is a comprehensive platform designed to help special education teachers streamline the process of developing Individualized Education Programs (IEPs) for their students. This project is in early development stage with basic project structure established.

## Development Status

This project is in the initial setup phase with only basic directory structure and documentation in place. The technology stack has not yet been determined, and the `src/` directory is currently empty.

## Project Structure

```
iep-platform/
├── src/                    # Source code (currently empty - awaiting tech stack decision)
├── tests/                  # Test files (currently empty)
├── docs/                   # Documentation (currently empty)
├── config/                 # Configuration files (currently empty)
├── scripts/                # Build and deployment scripts
│   └── init-git.sh        # Git repository initialization script
├── .gitignore             # Comprehensive gitignore with FERPA compliance considerations
└── README.md              # Project documentation
```

## Key Features (Planned)

- **Student Profile Management**: Comprehensive student information and assessment tracking
- **Goal Setting & Progress Monitoring**: Tools for creating measurable IEP goals and tracking student progress
- **Assessment Integration**: Support for various assessment tools and data visualization
- **Compliance Tracking**: Automated reminders and compliance checking for IEP timelines and requirements
- **Collaborative Tools**: Features for team collaboration between teachers, specialists, and parents
- **Document Generation**: Automated IEP document creation and customizable templates
- **Data Analytics**: Insights and reporting on student progress and program effectiveness

## Compliance & Privacy Requirements

**Critical**: This platform must be designed with FERPA compliance and student privacy as top priorities. All development must adhere to educational data privacy standards.

### Data Handling Rules
- Never commit real student data to the repository
- The `.gitignore` file includes specific exclusions for student data directories:
  - `data/students/`
  - `data/assessments/`
  - `*.student_data`
  - `test_data/real/`
- Use only synthetic/mock data for testing and development
- Ensure all data handling follows FERPA guidelines

## Development Commands

Since the project is in early development and no technology stack has been chosen yet, standard development commands are not yet established. The following script is available:

### Repository Setup
```bash
# Initialize git repository (if not already done)
./scripts/init-git.sh
```

## Architecture Considerations

The project structure suggests preparation for a multi-tier application with:
- Separation of concerns through dedicated directories
- Configuration management through the `config/` directory
- Comprehensive testing setup through the `tests/` directory
- Documentation-first approach with dedicated `docs/` directory

## Next Steps for Development

When beginning active development on this project:

1. **Technology Stack Decision**: Choose appropriate technologies for the educational domain requirements
2. **Database Design**: Design schemas that support IEP data structures while maintaining FERPA compliance
3. **Authentication & Authorization**: Implement role-based access control for teachers, administrators, specialists, and parents
4. **Security Framework**: Establish security patterns appropriate for educational data handling
5. **Testing Strategy**: Implement comprehensive testing with synthetic data that mirrors real-world scenarios

## Important Notes

- This is an educational technology project handling sensitive student information
- All development must prioritize privacy and compliance over convenience
- The empty directories indicate this project is awaiting foundational technology decisions
- Future AI instances should be prepared to help establish the initial codebase structure