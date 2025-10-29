document.addEventListener('DOMContentLoaded', function () {
const services = [
                {
                    title: 'Inpatient Wards',
                    image: 'ward.jpg',
                    description: 'Comfortable and clean inpatient wards are available for patients requiring overnight or extended care, managed by our dedicated nursing staff.',
                    keyServices: ['Private & Semi-Private Rooms', '24/7 Nursing Care', 'In-room Meal Service', 'Visitor Accommodations', 'Specialized Care Units'],
                    contactInfo: 'Please contact our admissions desk for information on room availability and amenities.'
                },
                {
                    title: 'Operation Theatre',
                    image: 'theatre-nurse-uk.png',
                    description: 'We are equipped with a modern, sterile operation theatre designed to support a wide range of surgical procedures with advanced technology.',
                    keyServices: ['General Surgery', 'Laparoscopic Surgery', 'Orthopedic Surgery', 'Cardiac Surgery', 'Post-Anesthesia Care Unit'],
                    contactInfo: 'Surgical procedures are scheduled through consultant recommendation. For inquiries, contact the surgical department.'
                },
                {
                    title: '24/7 OPD',
                    image: 'OPD-Wellness.jpg',
                    description: 'Our Outpatient Department operates 24/7, providing continuous medical consultation and care without the need for prior appointments.',
                    keyServices: ['Emergency Consultations', 'Minor Injury Treatment', 'General Health Checkups', 'Follow-up Visits', 'No Appointment Needed'],
                    contactInfo: 'For immediate medical attention, please visit our Outpatient Department at any time.'
                },
                {
                    title: 'Pharmacy Service',
                    image: 'pharmacy.jpg',
                    description: 'A fully stocked in-house pharmacy is available for quick and convenient access to prescribed medications.',
                    keyServices: ['Prescription Fulfillment', 'Over-the-Counter Medicine', 'Medication Counseling', 'Medical Supplies', 'Home Delivery Options'],
                    contactInfo: 'Our pharmacy is located on the ground floor and is open 24 hours a day.'
                },
                {
                    title: 'Diagnostic Services',
                    image: 'Diagnostic-Services.jpg',
                    description: 'We offer a wide range of diagnostic services including x-rays, ECG, ultrasound, and laboratory blood tests to support accurate medical evaluations.',
                    keyServices: ['X-Ray Imaging', 'Electrocardiogram (ECG)', 'Ultrasound Scans', 'Laboratory Blood Tests', 'CT & MRI Scans'],
                    contactInfo: 'Our diagnostic wing operates 24/7. Appointments can be booked for specialized tests.'
                },
                {
                    title: 'Wheelchair Accessible',
                    image: 'wheelchair.jpg',
                    description: 'Our facility is fully wheelchair accessible, ensuring safe and convenient entry for all patients with mobility needs.',
                    keyServices: ['Ramp Access', 'Automatic Doors', 'Accessible Restrooms', 'Designated Parking', 'Elevator Access'],
                    contactInfo: 'For specific accessibility questions or assistance upon arrival, please contact our front desk.'
                }
                ];
                const servicesGrid = document.getElementById('services-grid');
                const modal = document.getElementById('details-modal');
                const modalContentArea = document.getElementById('modal-content-area');


const departmentsData = {
            cardiology: {
                title: 'Cardiology',
                description: 'Our Cardiology department provides specialized care for heart health. Our expert cardiologists diagnose and treat a wide range of cardiovascular conditions, including coronary artery disease, heart failure, and arrhythmias.',
                services: ['ECG and EKG', 'Stress Testing', 'Angioplasty and Stenting', 'Pacemaker Implantation', 'Heart Failure Management']
            },
            neurology: {
                title: 'Neurology',
                description: 'The Neurology department offers comprehensive diagnosis and treatment for disorders of the nervous system, including the brain, spinal cord, and nerves. We specialize in stroke care, epilepsy, multiple sclerosis, and other neurological conditions.',
                services: ['Stroke Unit', 'EEG and EMG', 'Dementia Care', 'Migraine Treatment', 'Neurosurgical Consultations']
            },
            hepatology: {
                title: 'Hepatology',
                description: 'Dedicated to the health of the liver, gallbladder, biliary tree, and pancreas. Our specialists provide expert care for conditions such as hepatitis, cirrhosis, and liver cancer.',
                services: ['Liver Function Tests', 'Hepatitis Treatment', 'Liver Biopsy', 'Pancreatic Disease Management']
            },
            pediatrics: {
                title: 'Pediatrics',
                description: 'Our Pediatrics department provides specialized medical care for infants, children, and adolescents. Our team provides compassionate care from birth through young adulthood, focusing on preventative care and treatment of childhood illnesses.',
                services: ['Childhood Vaccinations', 'Growth and Development Monitoring', 'Acute and Chronic Illness Management', 'Pediatric Emergencies']
                },
                'eye-care': {
                title: 'Eye Care',
                description: 'Our Eye Care department provides comprehensive services for vision health, from routine exams and prescription glasses to advanced surgical procedures. We treat cataracts, glaucoma, and other ocular diseases.',
                services: ['Routine Eye Exams', 'Cataract Surgery', 'Glaucoma Management', 'Diabetic Retinopathy Treatment', 'Optical Services']
            }
        };
        const modal = document.getElementById('department-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalDescription = document.getElementById('modal-description');
        const modalServices = document.getElementById('modal-services');
        const closeBtn = modal.querySelector('.close-btn');

        // --- FUNCTION TO POPULATE SERVICE CARDS ---
            function renderServiceCards() {
                services.forEach((service, index) => {
                    const card = document.createElement('div');
                    // Added h-[450px] to make the cards taller for the background images.
                    card.className = 'group relative h-[450px] rounded-2xl overflow-hidden shadow-lg cursor-pointer transform hover:-translate-y-2 transition-transform duration-300';
                    card.innerHTML = `
                        <img src="${service.image}" alt="${service.title}" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        <div class="relative h-full flex flex-col justify-end p-8 text-white">
                            <div class="mt-auto">
                                <h3 class="text-3xl font-bold leading-tight">${service.title}</h3>
                                <button data-index="${index}" class="explore-btn mt-4 inline-flex items-center bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300">
                                    Explore More
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2 w-5 h-5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                                </button>
                            </div>
                        </div>
                    `;
                    servicesGrid.appendChild(card);
                });
            }
            // --- FUNCTION TO SHOW THE MODAL ---
            function showModal(service) {
                modalContentArea.innerHTML = `
                    <div class="p-8 relative">
                        <button id="close-modal-btn" class="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                        <h2 class="text-3xl font-bold text-blue-600 mb-4">${service.title}</h2>
                        <p class="text-gray-700 mb-6 leading-relaxed">${service.description}</p>
                        
                        <div class="mb-6">
                            <h3 class="text-xl font-semibold text-gray-900 mb-3">Key Services</h3>
                            <ul class="list-disc list-inside space-y-1 text-gray-700">
                                ${service.keyServices.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                        </div>

                        <div>
                            <h3 class="text-xl font-semibold text-gray-900 mb-3">Contact & Doctors</h3>
                            <p class="text-gray-700">${service.contactInfo}</p>
                        </div>
                    </div>
                `;
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
                modal.classList.remove('pointer-events-none');
                
                // We use a short timeout to allow the browser to apply the above style changes
                // before we trigger the animation, ensuring a smooth transition.
                requestAnimationFrame(() => {
                    modal.classList.remove('opacity-0');
                    modalContentArea.classList.remove('opacity-0', 'scale-95');
                });
            }
            // --- FUNCTION TO HIDE THE MODAL ---
            function hideModal() {
                modal.classList.add('opacity-0');
                modalContentArea.classList.add('opacity-0', 'scale-95');

                setTimeout(() => {
                    modal.classList.add('pointer-events-none');
                    document.body.style.overflow = ''; // Restore background scrolling
                }, 300); // Duration should match the transition
            }
            // Event listener for Explore More buttons (using event delegation)
            servicesGrid.addEventListener('click', function(e) {
                const button = e.target.closest('.explore-btn');
                if (button) {
                    const serviceIndex = button.dataset.index;
                    showModal(services[serviceIndex]);
                }
            });
             // Event listener for closing the modal
            modal.addEventListener('click', function(e) {
                // Close if clicking the background, the close button, or an SVG inside the button
                if (e.target.id === 'details-modal' || e.target.closest('#close-modal-btn')) {
                    hideModal();
                }
            });
            // Close modal with Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && !modal.classList.contains('pointer-events-none')) {
                    hideModal();
                }
            });
            renderServiceCards();
        });
        // Data for doctors by specialty
const doctorSpecialtyData = {
        "VOG": [{
        "Doctor": "Buddhinatha kodithuwakku",
        "Hospital": "Avissawella Base Hospital",
        "Gender": "Male",
        "Clinic Day": "sun, mon, tue, wed, thu, fri, sat"
    }, {
        "Doctor": "Susantha Amarasinghe",
        "Hospital": "Avissawella Base Hospital",
        "Gender": "Male",
        "Clinic Day": "sun, mon, tue, wed, thu, fri, sat"
    }],
    "VPP": [{
        "Doctor": "prasanna liyanage",
        "Hospital": "Avissawella Base Hospital",
        "Gender": "Male",
        "Clinic Day": "mon, wed, fri, sat"
    }, {
        "Doctor": "kumudini cooray",
        "Hospital": "Avissawella Base Hospital",
        "Gender": "Female",
        "Clinic Day": "sun, mon, tue, wed, thu, fri, sat"
    }],
    "VP": [{
        "Doctor": "p manivannan",
        "Hospital": "Avissawella Base Hospital",
        "Gender": "Male",
        "Clinic Day": "sun, mon, tue, wed, thu, fri, sat"
    }, {
        "Doctor": "Pradeep Gunasekara",
        "Hospital": "Avissawella Base Hospital",
        "Gender": "Male",
        "Clinic Day": "mon, tue, wed, thu, fri, sat"
    }, {
        "Doctor": "Randeel Wellaketiya",
        "Hospital": "Avissawella Base Hospital",
        "Gender": "Male",
        "Clinic Day": "mon, tue, wed, thu, fri, sat"
    }],
    "VEN": [{
        "Doctor": "Gayani Nanayakkara",
        "Hospital": "Avissawella Base Hospital",
        "Gender": "Female",
        "Clinic Day": "mon, wed, fri"
    }],
    "CCRD": [{
        "Doctor": "Ajith Dissanayake",
        "Hospital": "Avissawella Base Hospital",
        "Gender": "Male",
        "Clinic Day": "sun, mon, tue, wed, thu, fri, sat"
    }, {
        "Doctor": "sampath withanawasam",
        "Hospital": "National Hospital - Colombo",
        "Gender": "Male",
        "Clinic Day": "wed, sat"
    }, {
        "Doctor": "srilal liyanarachchi",
        "Hospital": "National Hospital - Ratnapura",
        "Gender": "Male",
        "Clinic Day": "sun"
    }, {
        "Doctor": "z jamaldeen",
        "Hospital": "National Hospital - Knady",
        "Gender": "Male",
        "Clinic Day": "First Sunday of every month"
    }],
    "VS": [{
        "Doctor": "Rohan Gunaratna",
        "Hospital": "Avissawella Base Hospital",
        "Gender": "Male",
        "Clinic Day": "sun, mon, tue, wed, thu, fri, sat"
    }, {
        "Doctor": "Sanath Wanigasooriya",
        "Hospital": "Avissawella Base Hospital",
        "Gender": "Male",
        "Clinic Day": "sun, mon, tue, wed, thu, fri, sat"
    }],
    "DL": [{
        "Doctor": "poorna Weerasinghe",
        "Hospital": "Avissawella Base Hospital",
        "Gender": "Male",
        "Clinic Day": "mon, wed, fri"
    }],
    "ENT": [{
        "Doctor": "Visira Weerasekara",
        "Hospital": "Avissawella Base Hospital",
        "Gender": "Male",
        "Clinic Day": "mon, tue, wed, thu, fri"
    }],
    "USS": [{
        "Doctor": "s n charavanapavan",
        "Hospital": "Avissawella Base Hospital",
        "Gender": "Male",
        "Clinic Day": "mon, tue, wed, thu, fri"
    }, {
        "Doctor": "jagath kosgahakumbura",
        "Hospital": "Avissawella Base Hospital",
        "Gender": "Male",
        "Clinic Day": "mon, tue, wed, thu, fri"
    }],
    "PSY": [{
        "Doctor": "pradeepika Hettiarachchi",
        "Hospital": "Avissawella Base Hospital",
        "Gender": "Female",
        "Clinic Day": "mon, tue, wed, thu"
    }],
    "RL": [{
        "Doctor": "dhanushka karunarathne",
        "Hospital": "Avissawella Base Hospital",
        "Gender": "Male",
        "Clinic Day": "mon, tue, wed, thu, fri"
    }, {
        "Doctor": "lilani p weerasekara",
        "Hospital": "National Hospital - Colombo",
        "Gender": "Female",
        "Clinic Day": "sun"
    }],
    "ONCO": [{
        "Doctor": "buddhini karunarathna",
        "Hospital": "Avissawella Base Hospital",
        "Gender": "Female",
        "Clinic Day": "mon, tue, wed, thu, fri"
    }],
    "orthodontist": [{
        "Doctor": "renuka priyadarshani",
        "Hospital": "Avissawella Base Hospital",
        "Gender": "Female",
        "Clinic Day": "sat"
    }],
    "orthopedic": [{
        "Doctor": "parthipan",
        "Hospital": "Avissawella Base Hospital",
        "Gender": "Male",
        "Clinic Day": "mon, tue, wed, thu, fri"
    }],
    "surgeon": [{
            "Doctor": "harsha jayasundara",
            "Hospital": "Avissawella Base Hospital",
            "Gender": "Male",
            "Clinic Day": "mon, tue, wed, thu, fri"
        }],
        "Ner surgon": [{
        "Doctor": "sarath munasinghe",
        "Hospital": "National Hospital - Colombo",
        "Gender": "Male",
        "Clinic Day": "thu"
    }, {
        "Doctor": "t thivakaran",
        "Hospital": "National Hospital - Colombo",
        "Gender": "Male",
        "Clinic Day": "thu"
    }],
    "PUL": [{
        "Doctor": "ruwanthi jayasekara",
        "Hospital": "National Hospital - Colombo",
        "Gender": "Female",
        "Clinic Day": "sat"
    }],
    "Urological": [{
        "Doctor": "hilary Fernando",
        "Hospital": "National Hospital - Ratnapura",
        "Gender": "Male",
        "Clinic Day": "wed, sat"
    }],
    "Ned": [{
        "Doctor": "jalitha thinna arachchi",
        "Hospital": "National Hospital - Gampaha",
        "Gender": "Male",
        "Clinic Day": "sat"
    },{
        "Doctor": "sanjaya heiyanthuduwa",
        "Hospital": "Army hospital colombo",
        "Gender": "Male",
        "Clinic Day": "Tue"
    }],
    "ES": [{
        "Doctor": "thisara gunathilaka",
        "Hospital": "National Eye Hospital colmbo",
        "Gender": "Male",
        "Clinic Day": "tu, sun"
    }, {
        "Doctor": "Thusitha Gunasekara",
        "Hospital": "Avissawella Base Hospital",
        "Gender": "Male",
        "Clinic Day": "wed, fri"
    }]
};
// Get modal elements
const modal = document.getElementById('department-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalServices = document.getElementById('modal-services');
const closeBtn = modal.querySelector('.close-btn');
function openModal(departmentId) {
    const data = departmentsData[departmentId];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalDescription.textContent = data.description;

    modalServices.innerHTML = '';
    data.services.forEach(service => {
        const li = document.createElement('li');
        li.textContent = service;
        modalServices.appendChild(li);
    });

    modal.classList.add('is-visible');
    modal.setAttribute('aria-hidden', 'false');
    modal.focus();
}
function closeModal() {
    modal.classList.remove('is-visible');
    modal.setAttribute('aria-hidden', 'true');
}
document.querySelectorAll('.department-card').forEach(card => {
    card.addEventListener('click', (event) => {
        const target = event.target.closest('.department-card');
        if (target) {
            const departmentId = target.dataset.department;
            openModal(departmentId);
        }
    });
    card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            const departmentId = card.dataset.department;
            openModal(departmentId);
        }
    });
});
// Event listener for closing the modal
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-visible')) {
        closeModal();
    }
});
// APPOINTMENT & DOCTOR SEARCH JAVASCRIPT
const YOUR_EMAILJS_SERVICE_ID = 'service_6g1xedk';
const YOUR_EMAILJS_TEMPLATE_ID = 'template_kdaiw1h';
const YOUR_EMAILJS_PUBLIC_KEY = 'vbpKFUzbOiYqfAzdY';



        
    
        
