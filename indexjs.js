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



        
    
        
