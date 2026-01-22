import type { Metadata } from "next";
import BackButton from "@/components/BackButton";

export const metadata: Metadata = {
  title: "Terms and Conditions | Education State",
  description: "Terms and Conditions for Education State (Egitim Irlanda).",
};

export default function TermsPage() {
  return (
    <main className="px-6 py-12 md:py-16">
      <BackButton />
      <div className="space-y-10">
        <header className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-black text-gray-900">Terms and Conditions</h1>
          <p className="text-base md:text-lg text-gray-700">
            These Terms and Conditions apply between Education State (Eğitim İrlanda), whose head office
            is located at 23 Marlborough Street, Dublin 1, and the individual who has received services
            through our company.
          </p>
          <p className="text-base md:text-lg text-gray-700">
            The Terms and Conditions cover, respectively: Privacy Policy, Application Procedures and
            Process, and Refund Policy.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">1. Privacy Policy</h2>
          <p className="text-gray-700">
            Your privacy is very important to us, and we are obliged to protect it securely. Your
            personal information shared in our pre-registration form and/or on our website
            www.egitimirlanda.com will not be shared with third parties unrelated to your registration.
          </p>
          <p className="text-gray-700">
            When you request information from us, register for one of our programs, and/or apply to
            become a partner, we collect personally identifiable information such as your full name,
            age, gender, postal address, phone number, email address, education and employment history,
            hobbies, and credit card details (“personal data”). If you register as a student, we may
            collect additional information, such as health-related details, in order to provide
            suitable homestay accommodation.
          </p>
          <p className="text-gray-700">
            If you are under the age of 18, we may request parental information and verify the
            accuracy of the information you have provided.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">2. Application Procedures and Process</h2>
          <p className="text-gray-700">
            The application process begins after you contact us to request information. Your
            application continues or ends based on your decision after receiving guidance from our
            consultants. If you choose to proceed, once the service is determined, you must complete
            and submit the pre-registration form sent by our consultants.
          </p>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">2.a – Pre-Registration Fee (Deposit)</h3>
            <p className="text-gray-700">
              After completing the pre-registration form, the student must pay a €250 pre-registration
              fee (deposit) for the application to be forwarded to the relevant institution. Deposit
              payments can be made to Education State or directly to the school. The deposit locks the
              price for 1 year and is non-refundable in case of cancellation or course duration
              changes. The deposit is not an additional fee; it is deducted from the total payment
              when full payment is made. The deposit is retained for 1 year from the registration
              date. If the student does not complete another course registration through Education
              State within this year, the deposit is forfeited.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">2.b – Payment</h3>
            <p className="text-gray-700">
              After registration is completed by our Dublin office consultants, the relevant invoice
              will be sent. The student is required to complete payment within 1 week of receiving the
              invoice. If payment is not made on time without prior notice, the registration will be
              canceled. Campaign-based registrations are subject to limited availability.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">2.c – Visa Application</h3>
            <p className="text-gray-700">
              After completing payment, the student must send the payment receipt to their consultant.
              Visa procedures begin once the receipt is received. The consultant is responsible for
              providing all necessary visa documents and support throughout the process. Once payment
              is received, acceptance letters will be sent to the student. After submitting the visa
              application, the student must inform the consultant of the result. Students whose visas
              are approved must share their flight details with their consultant.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">2.d – Arrival Date</h3>
            <p className="text-gray-700">
              The arrival date stated in the pre-registration form may be postponed only once, and
              only in mandatory circumstances. For students whose visas are approved and accommodation
              has been arranged, the arrival date cannot be changed at all.
            </p>
            <p className="text-gray-700">
              If a student arrives 1 week earlier, they must arrange alternative accommodation
              themselves. If a student arrives 1 week later, no refund or credit will be provided for
              the unused accommodation period.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">3. Refund Policy</h2>
          <p className="text-gray-700">
            Refunds are issued only in cases of visa rejection or cancellations notified at least 30
            days in advance. In the event of visa rejection, the student must submit a refund request
            to their consultant along with bank details and the official embassy rejection letter.
            Refunds are processed within approximately 6–12 weeks.
          </p>
          <p className="text-gray-700">
            From the total payment, an average of €250 school administration fee and €100
            accommodation administration fee will be deducted. Banks may charge transfer fees during
            the transfer process, which are not the responsibility of Education State.
          </p>
          <p className="text-gray-700">
            For cancellations notified 30 days in advance, the same deductions (€250 school + €100
            accommodation) apply.
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Approved visa cancellations:</span> No refunds are issued
            for students whose visas have been approved, even if they request cancellation. If a
            student with an approved visa wishes to cancel, they must send their passport and visa
            cancellation petition to the Irish Embassy. Once the visa cancellation stamp is applied
            to the passport, the student must scan and submit the stamped page to Education State.
            Only then will the course be canceled without refund, and the amount will be held as
            credit for 1 year. If the student does not submit the visa cancellation stamp, the refund
            process cannot be initiated.
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Deposit-only cancellations:</span> Students who have paid
            only the €250 deposit without proceeding with full school payment are not eligible for
            any refund.
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Deposit retention:</span> The deposit is retained for 1
            year from the registration date. If the student registers for another course through
            Education State within that year, the deposit will be deducted from the new registration.
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Internship programs:</span> For internship programs, a
            €200 deposit deduction is applied, and the remaining amount is refunded.
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Non-refundable expenses:</span> Additional expenses such
            as passport issuance, visa fees, and translation fees cannot be refunded. Detailed
            information is included in the mutually signed contract.
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Cancellations after visa application:</span> Cancellations
            made after submitting the visa application are subject to a €500 deduction. If the visa
            application has not yet been finalized, the student must notify the Irish Embassy by email
            of the intention to cancel and submit the cancellation confirmation from the Embassy to
            their consultant. If the visa has already been approved, the student must send their
            passport and visa cancellation letter to the Irish Embassy. After the visa cancellation
            stamp is applied, the student must scan and submit the stamped page to Education State.
            Otherwise, the refund process cannot be initiated.
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">School policy exceptions:</span> Some schools may not
            offer refunds after visa application and may instead hold the approved amount as credit.
            Education State cannot be held responsible for school-specific policies in such cases.
          </p>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">3.2 Accommodation Refund Policy</h3>
            <p className="text-gray-700">
              Refunds apply only in cases of visa rejection or cancellations made at least 30 days in
              advance. In case of visa rejection, a €50 administration fee is deducted, and the
              remaining amount is refunded within approximately 2 weeks.
            </p>
            <p className="text-gray-700">Cancellation penalties before accommodation start date:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Within 7 days: €100 administration fee + 2 weeks’ accommodation fee</li>
              <li>8–15 days: €100 administration fee + 1 week’s accommodation fee</li>
              <li>
                16 days or more: €100 administration fee + 1 week accommodation fee (if the host
                family has been assigned); no additional deduction (if the host family has not yet
                been assigned)
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">4. Airport Pickup Service</h2>
          <p className="text-gray-700">
            The airport pickup service costs €85 and is available only on weekends (Saturday &amp; Sunday)
            between 09:00–20:00. The service is valid for one-way transfer from Dublin Airport to the
            accommodation address. A return airport transfer requires an additional €85. Students must
            submit flight details before arrival.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">5. Visa Consultancy Service</h2>
          <p className="text-gray-700">
            Students registered through Education State receive free visa consultancy services.
          </p>
          <p className="text-gray-700">
            Students who have previously studied in Ireland through Education State and who later
            enroll in a course independently (without using Education State's services) must pay a
            €50 service fee if they request visa consultancy.
          </p>
          <p className="text-gray-700">For students who registered their courses independently with the school:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Short Term (up to 13 weeks): €200</li>
            <li>Long Term (13 weeks and above): €300</li>
          </ul>
          <p className="text-gray-700">
            Visa consultancy services do not include translation fees, visa fees, or insurance costs.
            Bank transfer fees are the responsibility of the student and must be covered by the
            student. The specified fees must be paid in full to the Education State account without
            any deductions. No refunds are issued in the event of visa rejection or application
            cancellation. The appeal period for visa rejections is 8 weeks. The waiting period and
            result are the student's responsibility. No claims can be made based on decisions made by
            the Embassy or the legal timeframes specified by the Embassy.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">6. Invoices</h2>
          <p className="text-gray-700">
            Education State is responsible for forwarding the invoice prepared by the school after
            sending the student's registration form. If accommodation is arranged by Accommodation
            Dublin, Education State is also responsible for issuing a second invoice for other
            payments (accommodation, airport pickup, insurance, accommodation deposit, etc.). The
            student must review the invoice carefully and immediately notify their consultant of any
            discrepancies or errors found.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">7. Accommodation</h2>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">7.1 Homestay Accommodation</h3>
            <p className="text-gray-700">
              Homestay accommodation requests must be accompanied by a completed homestay accommodation
              form. Our accommodation arrangements are made through Accommodation Dublin, an Irish
              company. For Education State students, no accommodation arrangement fee is charged for
              homestay reservations of 4 weeks or more. All families we arrange for our students are
              personally visited and approved by us in advance.
            </p>
            <p className="text-gray-700">
              The accommodation start date specified in the homestay form cannot be changed within 1
              week prior to the arrival date. If a change is made, accommodation will begin on the
              date originally stated in the form.
            </p>
            <p className="text-gray-700">
              Accommodation is arranged taking into account the special requests stated in the
              accommodation registration form. Placement is made with the family that best matches
              these special requests. Requests not explicitly stated in the form will not be
              considered. If we cannot find a family that matches the stated requirements, the
              student may request accommodation from the language school if they wish. The
              accommodation prices offered by the language school may differ from Accommodation
              Dublin's prices. In such cases, the student will be informed of the price difference and
              a new invoice will be sent.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">7.1.a – Accommodation Deposit</h3>
            <p className="text-gray-700">
              A €100 accommodation deposit is required. This amount will be refunded upon departure
              if no house rules are violated and no damage is caused to the family's home. The deposit
              will not be refunded in the following cases: damage to the host family's home,
              inappropriate behavior, or if payment is made directly to the family by mutual
              arrangement (detailed guidance on this is provided in the homestay accommodation guide).
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">7.1.b – Accommodation Duration</h3>
            <p className="text-gray-700">
              The minimum accommodation duration with a host family is 4 weeks. If the student is
              unsatisfied with the family, a family change can be made within the earliest 2 weeks.
              During peak periods (summer and Christmas), this change may not be immediately possible.
              A new accommodation letter will be sent with the family change request. The student is
              responsible for the transfer to the new accommodation.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">7.1.c – Accommodation Prices</h3>
            <p className="text-gray-700">
              Accommodation prices are as stated on our website. During summer (June–July–August) and
              Christmas (December 21–January 5) periods, weekly rates increase by €30. If visa
              approval is delayed or postponed and coincides with summer (June–July–August) or
              Christmas (December 21–January 5) periods, accommodation costs may increase.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">7.1.d – Check-in Times</h3>
            <p className="text-gray-700">
              On the first day of arrival in Ireland, check-in to the host family's house must be no
              later than 22:00. Check-in cannot be completed after this time. If a student wishes to
              arrive after this time, accommodation for that day is the student's responsibility.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">7.1.e – Refunds</h3>
            <p className="text-gray-700">
              Once the student has made payment, refunds are not applicable. Partial refunds for
              homestay accommodations apply only in cases of visa rejection and accommodation
              cancellation. In case of visa rejection, a €50 deduction is applied, and the remaining
              amount is refunded to the student.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">7.1.f – Accommodation Extension</h3>
            <p className="text-gray-700">
              Because reservation is made only for the paid weeks in homestay accommodations,
              extension with the same family is not guaranteed. Particularly during the busy summer
              season, it is recommended that students arriving during summer pay for their entire stay
              duration or a minimum of 12 weeks. Students who are satisfied with their host family and
              wish to extend must notify the Dublin office by the end of their first week of arrival.
              Students should not make direct payments to host families or make any arrangements
              directly with them.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">7.1.g – Accommodation Unavailable</h3>
            <p className="text-gray-700">
              If Accommodation Dublin cannot find accommodation for you, the accommodation fee will
              be refunded in full without deduction. If you wish, we can forward your accommodation
              request to the school. School-arranged accommodations may have different pricing. If you
              request accommodation from the school, you must pay the full accommodation amount to
              finalize your reservation; otherwise, the school's accommodation quotas may fill up.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">7.2 Student Dormitories</h3>
            <p className="text-gray-700">
              Dormitory registration is accepted based on student preference and dormitory
              availability. Student dormitories require a deposit payment in addition to the room fee.
              The deposit is fully refunded after the student departs if there is no damage or
              shortage in the room. In case of visa rejection, the fee excluding the deposit is
              refunded. For any problems or shortages experienced in the dormitory, it is recommended
              to contact the dormitory security officer responsible for the building.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">8. Campaigns</h2>
          <p className="text-gray-700">
            Language schools retain the right to create and terminate campaigns without prior
            notification to advisory firms or students. Currently registered students are not
            eligible to benefit from newly offered campaigns. Different campaigns cannot be combined
            with one another.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">9. Best Price Guarantee</h2>
          <p className="text-gray-700">
            Education State does not charge additional fees beyond the official brochure prices set
            by language schools. Other service providers cannot offer prices lower than the
            internationally standardized rates.
          </p>
          <p className="text-gray-700">
            Language schools set annual brochure prices that are valid worldwide. However, local
            promotions or special discounts may apply under certain conditions. In such cases,
            Education State commits to providing you with the best available discounts and
            promotions.
          </p>
          <p className="text-gray-700">
            If you obtain a lower price offer from another service provider, please share it with us.
            Your request will be reviewed and Education State will honor its Best Price Guarantee
            commitment to provide you with the best available rates.
          </p>
          <p className="text-gray-700">
            Exception: The Best Price Guarantee does not apply after you have obtained your visa and
            arrived in Ireland. Once you are in Ireland, Education State and the language school
            cannot provide refunds based on better offers you may discover later.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">10. Fees</h2>
          <p className="text-gray-700">
            Education State reserves the right to adjust fees due to taxes, government actions, or
            external circumstances beyond its control.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">11. Books and Learning Materials</h2>
          <p className="text-gray-700">
            Some courses may require additional payment for books and materials. Education State is
            not responsible for these costs.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">12. Dismissal / Expulsion</h2>
          <p className="text-gray-700">
            Students may be expelled or removed from the program for the following reasons:
            committing a crime, violating administrative or school rules, having an excessive
            absenteeism rate, or failing to pay required course fees. In such cases, no refunds will
            be issued, and the immigration office of the country where the student is located will be
            notified of the situation.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">13. Force Majeure</h2>
          <p className="text-gray-700">
            Education State is not responsible for or liable for failure to perform the services and
            obligations stipulated in the contract in the event of circumstances beyond its control,
            including but not limited to: fire, epidemic diseases, natural disasters, government laws
            and regulations, errors by suppliers and subcontractors, labor disputes, or any other
            unforeseen circumstances beyond Education State's control.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">14. Withdrawal Policy</h2>
          <p className="text-gray-700">
            Withdrawal is defined as abandoning all or part of a course (including any extensions)
            after the first day of the course start date. Under no circumstances will any refund be
            issued for withdrawal after the course start date has passed. This applies regardless of
            any conditions or circumstances. Students who withdraw from their program and abandon
            their course are not eligible to request refunds under any conditions for either the
            course fees, accommodation, or any other services that have been arranged and reserved.
            Additionally, withdrawn students forfeit their right to receive a course completion
            certificate.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">15. Coronavirus (COVID-19)</h2>
          <p className="text-gray-700">
            Due to COVID-19, rights are generally held for 1 year. Travel restrictions and quarantine
            measures are not the responsibility of Education State.
          </p>
          <p className="text-gray-700">If:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Only deposit paid → no refund, credit valid for 1 year</li>
            <li>Full school fee paid → credit valid for 1 year</li>
            <li>Accommodation paid → refund subject to deductions depending on notice period</li>
          </ul>
          <p className="text-gray-700">
            If the student starts the course and returns home, no refunds apply. Remaining course time
            is held as credit for 1 year.
          </p>
        </section>
      </div>
    </main>
  );
}
