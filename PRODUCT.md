# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

People in Goiânia and the surrounding region who need foot care and want it at home. There are two confirmed groups:

- **Clinical need, limited mobility:** older people and people with diabetes, for whom a trip to a clinic is hard or risky. Family members often find the service and book on their behalf.
- **Convenience and privacy:** the general public who would rather be treated at home than travel and sit in a waiting room.

In both cases the visitor's job is the same: decide that Vilma is trustworthy and clinically competent, then book.

## Product Purpose

A one-page marketing site for Vilma Aires, a podiatrist (podóloga) who only does home visits. It explains the services, shows how a home visit works, establishes clinical credibility, and moves the visitor to book on WhatsApp. Success means a WhatsApp conversation is started.

## Positioning

A certified podiatrist who brings a full, sterilised clinical kit to the patient's home. The care is clinical, not cosmetic (pedicure). It is personal, because the patient is treated by Vilma herself and not by a clinic team. And it is fully home-based, not a clinic that offers home visits on the side.

## Operating Context

- Booking happens only through WhatsApp or by phone, both on (62) 98558-5102 (`https://wa.me/5562985585102`, `tel:+5562985585102`). The site's booking form only prefills a WhatsApp message; there is no booking system.
- Visitors are likely to arrive on a phone, often through a shared link or a family recommendation.
- How a visit works: get in touch and book → Vilma travels to the home with sterilised equipment → assessment and treatment.

## Capabilities and Constraints

- Static site: `index.html`, `style.css`, `main.js`, `logo.png`. No build step and no framework.
- Language: **Brazilian Portuguese (pt-BR)**. The current copy and `lang="pt-PT"` use European Portuguese ("contacto", "Porquê", "domicílio" phrasing, "si") and must be converted.
- Confirmed services:
  - Calluses and corns: removal (retirada de calo), excess hard skin, cracked heels.
  - Ingrown toenails (onicocriptose).
  - Diabetic foot prevention: assessment, correct nail cutting, preventive care.
- Only these three services appear on the site for now, by the owner's decision. Do not add others until they are explicitly requested.
- **Open:** exact service area, prices and opening hours.

## Brand Commitments

- Name: **Vilma Aires · Podóloga**.
- Logo: `logo.png`. A line drawing of a foot with two leaves (one teal, one green) and a "VILMA AIRES / PODÓLOGA" wordmark. It is the existing brand asset and must be kept.
- Voice: warm and direct, first person from Vilma ("Desloco-me até à sua residência"), and reassuring about pain and hygiene.

## Evidence on Hand

- **Confirmed true:** Vilma is certified and trained in podiatry; instruments are sterilised in an autoclave; the service is 100% home-based.
- **Placeholders, not real:** the stats "500+ Clientes Satisfeitos" and "10+ Anos de Experiência", and the testimonials from "Maria Antónia", "João Silva" and "Teresa Santos". Do not present these as real. Remove them or mark them clearly until Vilma supplies real figures and reviews.
- **No photography, by owner's decision (2026-10-14):** the site ships with no photos of Vilma or her equipment. Do not add photo slots or stock images unless the owner asks.
- **Training (from her certificates, shared by the owner on 2026-10-14):** full name Maria Vilma Monteiro Aires.
  - 2018: Formação Inicial e Continuada de Trabalhadores em Podologia, Instituto Climppé, Goiânia, 300 hours (the main qualification).
  - 2019: Onicoórteses corretivas das unhas (ortoniquia/ortonixia, correcting nail curvature), Instituto Climppé, 6 hours.
  - 2019: Workshop de Onicocriptose com técnica de contrapressão, 8 hours.
  - 2020: Técnicas de Espiculectomia (the certificate prints "Espiculaectomia"; the owner chose the standard spelling), Instituto de Podologia e Saúde, 10 hours.
  - 2021: Ácidos na Podologia, online course, Grupo AP Soluções Podológicas.
  - 2021: Velaterapia e Argiloterapia aplicadas à podologia, Escola de Podologia e Saúde, 10 hours.
  - The certificate images are not published (No Photography). Instructors' names and signatures stay off the site.
  - Course hours are kept here for reference but are not shown on the site (owner's decision, 2026-10-14).
- **Missing:** a professional registration number (none appears on the certificates); real reviews (for example from Google).

## Product Principles

1. **Trust before persuasion.** People with diabetes and their families are choosing someone who will come into their home and use sharp instruments. Credentials and hygiene come before sales language.
2. **Never fabricate proof.** Use only real numbers, reviews and credentials. An empty slot is better than an invented one.
3. **One clear path to WhatsApp.** Every section should make booking a single step.
4. **Speak to the family as well as the patient.** The person booking is often not the person being treated.
5. **Clinical, not cosmetic.** Present the service as healthcare, not a beauty treatment.

## Accessibility & Inclusion

Many patients are older and some have diabetes-related vision problems. The site needs generous text sizes, strong contrast, large tap targets and simple language, and it should meet WCAG 2.1 AA as a baseline.
