// Grab elements
const menuIcon = document.getElementById("menuIcon");
const sidebar = document.getElementById("sidebar");
const links = document.querySelectorAll(".sidebar a");
let isSidebarOpen = false;
let productsInCart = [];
let cartList = [];

// Event listener to handle clicking the menu icon
menuIcon.addEventListener("click", () => {
  if (window.innerWidth <= 768) {
    // Mobile: toggle the 'open' class
    sidebar.classList.toggle("open");
  } else {
    // Desktop: use 'left' positioning to toggle visibility
    if (isSidebarOpen) {
      sidebar.style.left = "-200px";
    } else {
      sidebar.style.left = "0";
    }
  }

  // Toggle the state
  isSidebarOpen = !isSidebarOpen;
});

// Function to close the sidebar and navigate to a page
function selectPage(event) {
  event.preventDefault(); // Prevent the default link navigation to ensure the sidebar closes first
  const targetUrl = event.target.getAttribute("href"); // Get the target URL from the clicked link

  // Close the sidebar with a smooth transition
  if (window.innerWidth <= 768) {
    sidebar.classList.remove("open"); // Close the sidebar on mobile
  } else {
    sidebar.style.left = "-200px"; // Close the sidebar on desktop
  }

  // Wait for the transition to complete before navigating
  setTimeout(() => {
    window.location.href = targetUrl; // Navigate to the new page after the sidebar closes
  }, 500); // Delay matches the CSS transition time (0.5s)
}

// Add event listeners to all sidebar links
links.forEach((link) => {
  link.addEventListener("click", selectPage);
});

function tabSelected(tabPick) {
  let q = document.getElementById("tabInfoItself");
  if (tabPick == "Majors") {
    q.innerHTML = `<div class="textBG">
                    <ul>
                        <li>Accounting (A.A.S, B.S)</li>
                        <li>Architecture & Sustainable Design</li>
                        <li>Automotive Technology & Management</li>
                        <li>Aviation Maintenance / Aviation Technology</li>
                        <li>Baking & Pastry Arts / Culinary Arts</li>
                        <li>Nursing (including RN-to-BSN, etc.)</li>
                        <li>Emergency Management & Homeland Security</li>
                        <li>Graphic Design & Art</li>
                        <li>Welding & Metal Fabrication</li>
                    </ul>
                    </div>
                    `;
  } else if (tabPick == "Curr") {
    q.innerHTML = ` <div class="textBG">
                      <ul>
                        <li>Degree‐specific required courses (major-core courses), electives, and sometimes structured
                            pathways for “completion” (e.g. finishing a Bachelor’s after an Associate) in some fields.
                        </li>
                        <li>Work-based learning components are emphasized: labs and lecture split, “hands-on learning”
                            labs, experiential / applied learning elements.</li>
                        <li>Selective admission criteria in some programs, particularly in Nursing & Health Sciences.
                        </li>
                    </ul>
                    </div>
                    `;
  } else if (tabPick == "FacP") {
    q.innerHTML = ` <div class="textBG">
                      <ul>
                        <li>There is a Core Courses Faculty & Staff section listing faculty who teach general education
                            / core courses (e.g. English Composition, Technical Communication, Mathematics, Natural
                            Sciences, Social Sciences & Humanities) with their titles and sometimes specialties.</li>
                        <li>The Engineering Technologies School has its own faculty & staff pages organized by divisions
                            (Construction & Architecture; Diesel Tech & Natural Resources; Industrial & Computer
                            Technologies; Materials Science & Engineering Technologies; Transportation) showing
                            profiles.</li>
                        <li>The College also has appointed administrators for curriculum & instruction (e.g. Andrea M.
                            Campbell as assistant dean for curriculum & instruction) who manage oversight of faculty
                            development, new faculty, curriculum processes, etc</li>
                    </ul>
                  </div>
                    `;
  } else if (tabPick == "FacA") {
    q.innerHTML = `
                    <div class="textBG">
                      <ul>
                        <li>
                            The Fitness Center in the Bush Campus Center is open seven days a week during fall/spring
                            semesters (and weekdays during summer/breaks). It includes two weight rooms (machines & free
                            weights), a cardio room, sauna, locker rooms, etc. There’s also “Flexible Space” added near
                            the Fitness Center for lighter exercise or stretching, yoga, etc.
                        </li>
                        <li>
                            The Madigan Library is a major facility: seating for over 1,000, private study lounges,
                            classrooms, computer labs, a VR studio, esports lab, special collections, galleries, etc.
                            There are numerous computer labs (small & large lecture-size) across campus.
                        </li>
                        <li>
                            The campus is near outdoor recreational opportunities: hiking, biking, fishing, trails.
                            On-campus amenities in residence halls include laundry facilities, mail services, wired &
                            wireless network access, furnished living areas.
                        </li>
                    </ul>
                  </div>
                    `;
  } else if (tabPick == "Ex") {
    q.innerHTML = ` <div class="textBG">
                      <ul>
                        <li>There are 70+ clubs and organizations that students can join, or students can start their
                            own.</li>
                        <li>Examples include the Outdoors Club, which organizes hiking, camping, biking, fishing,
                            ski/snowboard trips, etc.</li>
                        <li>There are student government / leadership roles (e.g. Resident Assistants), student
                            engagement through events, intramurals, etc.</li>
                        <li>Athletics: The school competes as the “Wildcats” with various sports, and has multiple
                            athletic facilities (gymnasium, fields, tennis courts, etc.).</li>
                    </ul>
                    </div>
                    `;
  } else if (tabPick == "House") {
    q.innerHTML = `
                    <div class="textBG">
                      <ul>
                        <li>On-campus residence halls provide a mix of apartment-style and traditional dorm-style units.
                            They are fully furnished, include utilities, laundry, wired & wireless internet.</li>
                        <li>Three-bedroom apt (6 students): ~$3,226 per student/semester</li>
                        <li>Two-bedroom apartment (4 students): ~$3,671</li>
                        <li>One-bedroom apartment (2 students): ~$3,803</li>
                        <li>One-bedroom (3 or 4 students sharing): ~$3,226 / $2,872 depending on unit size and
                            occupancy.</li>
                        <li>Single-bedroom (single occupant): more expensive (around $4,296) per semester.</li>
                    </ul>
                    </div>
                    `;
  } else if (tabPick == "Tuition") {
    q.innerHTML = ` <div class="textBG">
                      <ul>
                        <li>For the 2025-26 academic year, tuition and mandatory fees for a typical full-time PA
                            resident student (two 15-credit semesters) are about $18,690 annually. (26,640 for out of
                            state students)</li>
                        <li>In-state: $530 per credit hour for tuition plus fees, bringing the total in-state “tuition &
                            fees” to $623/credit hour. Out-of-state: $795 per credit hour for tuition plus fees, total
                            of $888/credit hour.</li>
                        <li>There are additional “related course fees” for lab/clinical instruction (e.g. $60 per lab
                            hour) and special online instructional/testing resources for some health-programs.</li>
                    </ul>
                    </div>
                    `;
  } else if (tabPick == "Finance") {
    q.innerHTML = `<div class="textBG">
                      <ul>
                        <li>Penn College offers 350+ scholarships; applying once qualifies you for all eligible ones.
                        </li>
                        <li>Students can access grants (federal/state), merit scholarships, institutional aid. </li>
                        <li>Veterans, active military, or dependents/family members of veterans have specific aid
                            programs.</li>
                        <li>Financial Aid Award Timeline: For example, awarding for many scholarships begins April 1
                            each year.</li>
                    </ul>
                    </div>
                    `;
  } else if (tabPick == "Pay") {
    q.innerHTML = ` <div class="textBG">
                      <ul>
                        <li>Deferred Payment Plan: eligible students can split their bill over the first 12 weeks of the
                            semester. Must pay a $30 enrollment fee plus a 20% down payment of tuition, housing, and
                            related fees. The rest is spread over four equal installments (each 20%).</li>
                        <li>Fall semester bills typically are available in summer (e.g. July) and due by early August —
                            if not paid or enrolled in a payment plan by the due date, late fees apply. </li>
                        <li>Spring semester similar schedule: bills issued in late fall / early winter, due at the start
                            of the spring semester.</li>
                        <li>Late Fees: If payment not received by the due date or not enrolled in Payment Plan, a $50
                            late fee is assessed.</li>
                    </ul>
                    </div>
                    `;
  } else if (tabPick == "Career") {
    q.innerHTML = ` <div class="textBG">
                      <ul>
                        <li>The overall graduate placement rate at Penn College is approximately 97.7%. This reflects
                            the percent of graduates who successfully find relevant employment after finishing their
                            programs.</li>
                        <li>In some years, the rate reported has also been ~96%, especially when emphasizing applicants
                            who participated in internship/co-op activities and career fairs.</li>
                        <li>Many students secure internships or co-ops during their studies, often via the college’s
                            Career Fair. These internships frequently lead to full-time job offers.</li>
                        <li>For example, during the Spring 2025 Career Fair, over 300 companies attended and offered
                            both internship and full-time job opportunities.</li>
                    </ul>
                    </div>
                    `;
  } else if (tabPick == "internship") {
    q.innerHTML = ` <div class="textBG">
                      <ul>
                        <li>Penn College has strong partnerships with numerous employers and industry entities that
                            support recruiting, internships, and hands-on training. Some mentioned include Honeywell,
                            UPMC, Fronius International, BWX Technologies, and many others.</li>
                        <li>The Career Fair is a major event: it draws in 300+ companies and gives students direct
                            access to internships and full-time roles.</li>
                        <li>Advisory committees exist in many technical fields (e.g. welding) where alumni and industry
                            experts help guide curriculum and sometimes provide equipment, mentoring, or judging in
                            competitions. (E.g. Richard Conrad’s participation in the Welding Advisory Committee.)</li>
                        <li>Many alumni return to participate in recruiting student interns / employees.</li>
                    </ul>
                    </div>
                    `;
  } else {
    q.innerHTML = ``;
  }
}
