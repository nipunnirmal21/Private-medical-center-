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
                ];

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
            // Give focus to the modal to trap it for accessibility
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

        const YOUR_EMAILJS_SERVICE_ID = 'service_6g1xedk';
        const YOUR_EMAILJS_TEMPLATE_ID = 'template_kdaiw1h';
        const YOUR_EMAILJS_PUBLIC_KEY = 'vbpKFUzbOiYqfAzdY';

        const form = document.getElementById('appointmentForm');
        const appointmentBtn = document.getElementById('appointmentBtn');

        const showError = (id, message) => {
        const errorElement = document.getElementById(id);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.remove('hidden');
        }
        };
        const hideError = (id) => {
        const errorElement = document.getElementById(id);
        if (errorElement) {
            errorElement.classList.add('hidden');
        }
        };
        form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Validate form fields
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const specialist = document.getElementById('specialist').value;
        const doctor = document.getElementById('doctor').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

         let isValid = true;
        hideError('name-error');
        hideError('phone-error');
        hideError('specialist-error');
        hideError('doctor-error');
        hideError('date-error');
        hideError('time-error');

        if (name.trim() === '') {
            showError('name-error', 'Please enter your name.');
            isValid = false;
        }
        if (phone.trim() === '' || !/^\d{10,}$/.test(phone)) {
            showError('phone-error', 'Please enter a valid phone number (at least 10 digits).');
            isValid = false;
        }
        if (specialist.trim() === '') {
            showError('specialist-error', 'Please select a specialist.');
            isValid = false;
        }
        if (doctor.trim() === '') {
            showError('doctor-error', 'Please select a doctor.');
            isValid = false;
        }
        if (date.trim() === '') {
            showError('date-error', 'Please select a date.');
            isValid = false;
        }
        if (time.trim() === '') {
            showError('time-error', 'Please select a time.');
            isValid = false;
        }

        if (!isValid) {
            return;
        }
        appointmentBtn.disabled = true;
        appointmentBtn.textContent = 'Sending...';

        const templateParams = {
            name: name,
            phone: phone,
            specialist: specialist,
            doctor: doctor,
            date: date,
            time: time,
            // Recipient emails for the template
            to_email_1: 'nipunnirmalsamarathunga11@gmail.com',
            to_email_2: 'aimagica968@gmail.com'
        };
        emailjs.send(YOUR_EMAILJS_SERVICE_ID, YOUR_EMAILJS_TEMPLATE_ID, templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                // Show success message
                const messagesContainer = document.getElementById('form-messages');
                messagesContainer.innerHTML = '<p class="text-green-600 font-semibold">Appointment booked successfully!</p>';
                // Optionally clear the form
                form.reset();
            }, function(error) {
                console.log('FAILED...', error);
                // Show error message
                const messagesContainer = document.getElementById('form-messages');
                messagesContainer.innerHTML = '<p class="text-red-600 font-semibold">Failed to book appointment. Please try again.</p>';
            })
            .finally(() => {
                // Re-enable the button after the attempt
                appointmentBtn.disabled = false;
                appointmentBtn.textContent = 'Book Appointment';
            });
    });
            const allDoctors = [
        "Alistair Finch", "Evelyn Reed", "Marcus Thorne", "Julianna Gray", "Liam Carter",
        "Sophia Chen", "Benjamin Hayes", "Isabella Rossi", "Owen Miller", "Amelia Foster"
    ];

    const searchInput = document.getElementById('doctor-search');
    const autocompleteList = document.getElementById('autocomplete-list');
    const doctorCards = document.querySelectorAll('.doctor-carousel-card');

    searchInput.addEventListener('keyup', function(e) {
        const searchText = e.target.value.toLowerCase();
        
        // Clear previous list
        autocompleteList.innerHTML = '';
        if (searchText.length === 0) {
            autocompleteList.classList.add('hidden');
            doctorCards.forEach(card => card.style.display = '');
            return;
        }

        const matches = allDoctors.filter(doctor => doctor.toLowerCase().includes(searchText));

        if (matches.length > 0) {
            matches.forEach(match => {
                const item = document.createElement('div');
                item.classList.add('autocomplete-item');
                item.textContent = match;
                item.addEventListener('click', () => {
                    searchInput.value = match;
                    autocompleteList.classList.add('hidden');
                    filterDoctors(match);
                });
                autocompleteList.appendChild(item);
            });
            autocompleteList.classList.remove('hidden');
        } else {
            autocompleteList.classList.add('hidden');
            doctorCards.forEach(card => card.style.display = '');
        }

        filterDoctors(searchText);
    });
     function filterDoctors(query) {
        const filteredQuery = query.toLowerCase();
        doctorCards.forEach(card => {
            const doctorName = card.dataset.doctorName.toLowerCase();
            if (doctorName.includes(filteredQuery)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }

    searchInput.addEventListener('focusout', () => {
        // Hide autocomplete list after a small delay to allow for clicks
        setTimeout(() => {
            autocompleteList.classList.add('hidden');
        }, 200);
    });



        
    
        
