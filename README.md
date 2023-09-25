# Feature-Sliced Design + Zustand

Trying out a Feature-Sliced Design architectural methodology and Zustand as a state manager

- [FSD](https://feature-sliced.design/)
- [Zustand](https://github.com/pmndrs/zustand)

## What is Feature-Sliced Design?

Feature-Sliced Design (FSD) is an architectural methodology for scaffolding front-end applications. Simply put, it's a compilation of rules and conventions on organizing code. The main purpose of this methodology is to make the project more understandable and structured in the face of ever-changing business requirements.

### FSD Pros:
- Explicit business logic - easily discoverable architecture thanks to domain scopes
- Adaptability - architecture components can be flexibly replaced and added for new requirements
- Tech debt & Refactoring - each module can be independently modified/rewritten without side effects
- Explicit code reuse - a balance is maintained between DRY and local customization

### FSD Cons:
- More complex to create and maintain (rather than no architecture or a module design pattern)
- Requires more team responsibility - every team member must follow the pattern including newcomers.
- Sheer complexity - harder to start and follow at the beginning; however, it makes it very simple to maintain the code in future when the app has become big and complex.
