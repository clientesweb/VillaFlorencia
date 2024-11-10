document.addEventListener('DOMContentLoaded', function() {
    // Datos de ejemplo (en una aplicación real, estos datos vendrían de una API o base de datos)
    const heroImages = [
        "img/hero.png",
        "img/hero1.png",
        "img/hero2.png"
    ];

    const properties = [
        { 
            id: 1, 
            title: "Villa Florencia - Casa Modelo", 
            price: "Consultar", 
            image: "img/casa-modelo.png", 
            type: "venta",
            description: "¡Oportunidad única! Hermosa casa modelo en Villa Florencia. Este espacioso hogar cuenta con 3 habitaciones, 2.5 baños modernos, cocina abierta, sala y comedor acogedores. Áreas sociales incluyen piscina, parque infantil y áreas verdes. Seguridad 24/7 con acceso controlado.",
            features: [
                "3 habitaciones con armarios empotrados",
                "2.5 baños modernos con acabados de alta calidad",
                "Cocina abierta con muebles a medida",
                "Sala y comedor acogedores",
                "Áreas sociales: piscina, parque infantil, áreas verdes",
                "Seguridad 24/7 con acceso controlado"
            ],
            gallery: [
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
                "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
                "https://images.unsplash.com/photo-1600566752547-33cce5195f64?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
                "https://images.unsplash.com/photo-1600566752421-3ec9c3ec7dfb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
                "https://images.unsplash.com/photo-1600566752734-2a0cd53b9f58?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
            ]
        },
        { 
            id: 2, 
            title: "Villa Florencia - Casa Familiar", 
            price: "Consultar", 
            image: "img/casa-familiar.png", 
            type: "venta",
            description: "Amplia casa familiar en Villa Florencia, perfecta para familias que buscan comodidad y seguridad.",
            features: [
                "4 habitaciones amplias y bien iluminadas",
                "3 baños completos",
                "Amplio jardín privado",
                "Cocina equipada con electrodomésticos modernos",
                "Garaje para 2 vehículos",
                "Acceso a todas las amenidades de Villa Florencia"
            ],
            gallery: [
                "https://images.unsplash.com/photo-1600607687644-c7f34e88598f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
                "https://images.unsplash.com/photo-1600607687668-0b7b4bf7a00a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
                "https://images.unsplash.com/photo-1600607687710-040798eea3fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
            ]
        },
        { 
            id: 3, 
            title: "Villa Florencia - Casa de Campo", 
            price: "Consultar", 
            image: "img/casa-campo.png", 
            type: "venta",
            description: "Encantadora casa de campo en Villa Florencia, ideal para quienes buscan tranquilidad y contacto con la naturaleza.",
            features: [
                "3 habitaciones con vistas al jardín",
                "2 baños rústicos",
                "Amplia terraza con área de barbacoa",
                "Huerto orgánico",
                "Establo para caballos",
                "Acceso a senderos naturales"
            ],
            gallery: [
                "https://images.unsplash.com/photo-1600607687954-e85aa7b46ca3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
                "https://images.unsplash.com/photo-1600607687968-d7a205ad5e7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
                "https://images.unsplash.com/photo-1600607687985-a6ad18e3c1d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
            ]
        },
        { 
            id: 4, 
            title: "Villa Florencia - Casa Moderna", 
            price: "Consultar", 
            image: "img/casa-moderna.png", 
            type: "venta",
            description: "Elegante casa moderna en Villa Florencia con diseño vanguardista y todas las comodidades.",
            features: [
                "3 habitaciones con baño privado",
                "Sala de estar con doble altura",
                "Cocina de concepto abierto con isla",
                "Sistema de domótica integrado",
                "Terraza en la azotea con jacuzzi",
                "Garaje subterráneo para 2 vehículos"
            ],
            gallery: [
                "https://images.unsplash.com/photo-1600607688960-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
                "https://images.unsplash.com/photo-1600607688951-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
                "https://images.unsplash.com/photo-1600607688942-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
            ]
        },
        { 
            id: 5, 
            title: "Villa Florencia - Casa Ejecutiva", 
            price: "Consultar", 
            image: "img/casa-ejecutiva.png", 
            type: "venta",
            description: "Casa ejecutiva en Villa Florencia, perfecta para profesionales que buscan comodidad y estilo.",
            features: [
                "2 habitaciones amplias con vestidor",
                "Oficina en casa con vista al jardín",
                "Sala de cine en casa",
                "Gimnasio privado equipado",
                "Piscina infinita con vistas panorámicas",
                "Sistema de seguridad avanzado"
            ],
            gallery: [
                "https://images.unsplash.com/photo-1600607688921-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
                "https://images.unsplash.com/photo-1600607688912-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
                "https://images.unsplash.com/photo-1600607688903-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
            ]
        }
    ];

    const services = [
        { title: "Asesoría Legal", icon: "fas fa-gavel", description: "Asistencia legal completa en transacciones inmobiliarias en Villa Florencia." },
        { title: "Financiamiento", icon: "fas fa-chart-line", description: "Opciones de financiamiento flexibles para tu hogar en Villa Florencia." },
        { title: "Diseño Personalizado", icon: "fas fa-pencil-ruler", description: "Personaliza tu casa en Villa Florencia según tus gustos y necesidades." },
        { title: "Gestión de Proyectos", icon: "fas fa-tasks", description: "Administración integral de tu proyecto de construcción en Villa Florencia." },
        { title: "Análisis de Mercado", icon: "fas fa-search-dollar", description: "Estudios detallados del mercado inmobiliario en la zona de Villa Florencia." },
        { title: "Gestión de Ventas", icon: "fas fa-handshake", description: "Estrategias efectivas para la venta de propiedades en Villa Florencia." },
        { title: "Venta de Proyectos en Planos", icon: "fas fa-drafting-compass", description: "Oportunidad de compra en etapa de planificación en Villa Florencia." },
        { title: "Servicio Post-Venta", icon: "fas fa-home", description: "Atención continua después de la compra de tu propiedad en Villa Florencia." }
    ];

    const testimonials = [
    {
        name: "Juan Pérez",
        text: "Excelente servicio, encontré mi casa ideal en Villa Florencia. Desde el primer momento me ofrecieron opciones que se ajustaban a mis necesidades, y todo el proceso fue transparente y fácil de seguir. El equipo se encargó de cada detalle, desde la negociación hasta la firma. Estoy muy contento con mi compra y la atención que recibí. ¡Recomiendo totalmente Villa Florencia!",
        rating: 5,
        date: "Enero 2024"
    },
    {
        name: "María González",
        text: "Profesionalismo y dedicación en cada paso del proceso de compra en Villa Florencia. Me acompañaron durante todo el proceso, desde la búsqueda hasta la firma del contrato, explicándome todo con mucha claridad. Además, me brindaron asesoría sobre la mejor opción de financiamiento, lo cual hizo todo mucho más fácil. Estoy muy agradecida por la atención y la calidad de servicio.",
        rating: 5,
        date: "Marzo 2024"
    },
    {
        name: "Carlos Rodríguez",
        text: "La mejor experiencia en compra de propiedades. Villa Florencia es altamente recomendado. Desde el primer contacto hasta la entrega final, todo fue rápido y eficiente. El equipo de Villa Florencia se encargó de gestionar cada detalle, manteniéndome informado en todo momento. Me dieron una excelente asesoría y pude lograr una transacción rápida y beneficiosa.",
        rating: 5,
        date: "Febrero 2024"
    }
];

    const instagramPosts = [
        { image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80", link: "#" },
        { image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80", link: "#" },
        { image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80", link: "#" },
        { image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80", link: "#" }
    ];

    const faqs = [
        { 
            question: "¿Cuál es el proceso para comprar una casa en Villa Florencia?", 
            answer: "El proceso generalmente incluye: visita al proyecto, selección de la casa, negociación del precio, firma de un contrato de compraventa, obtención de financiamiento si es necesario, y cierre de la transacción. Nuestro equipo le guiará en cada paso." 
        },
        { 
            question: "¿Qué documentos necesito para comprar en Villa Florencia?", 
            answer: "Generalmente necesitará: cédula de identidad, comprobantes de ingresos, declaración de impuestos, y referencias bancarias. Nuestro equipo le ayudará a reunir toda la documentación necesaria." 
        },
        { 
            question: "¿Cómo se determina el precio de las casas en Villa Florencia?", 
            answer: "El precio se determina considerando factores como el tamaño de la casa, las características específicas, la ubicación dentro del proyecto, y las amenidades incluidas. Ofrecemos diferentes modelos para adaptarnos a diversos presupuestos." 
        },
        { 
            question: "¿Cuánto tiempo toma la construcción de una casa en Villa Florencia?", 
            answer: "El tiempo de construcción puede variar dependiendo del modelo de casa seleccionado y otros factores. En promedio, puede tomar entre 6 a 12 meses desde la firma del contrato hasta la entrega de la casa." 
        },
        { 
            question: "¿Ofrecen opciones de financiamiento para comprar en Villa Florencia?", 
            answer: "Sí, trabajamos con varias instituciones financieras para ofrecer opciones de financiamiento adaptadas a las necesidades de nuestros clientes. También ofrecemos planes de pago flexibles durante la construcción." 
        }
    ];

    const investReasons = {
        samborondon: [
            "Villa Florencia, ubicada en el corazón de Samborondón, donde la inversión y el progreso se unen.",
            "Descubre Villa Florencia, el destino más próspero para invertir en Ecuador, con crecimiento sostenible y estabilidad.",
            "Villa Florencia, comunidad innovadora y emprendedora, impulsa tu calidad de vida con infraestructura y tecnología de vanguardia.",
            "Invierte en Villa Florencia y aprovecha su ubicación estratégica en Samborondón",
            "Villa Florencia, líder en desarrollo urbano y calidad de vida, ofrece oportunidades ilimitadas para compradores e inversores.",
            "La economía en crecimiento y la inversión constante convierten a Villa Florencia en un polo de atracción para familias y profesionales.",
            "Villa Florencia, comunidad de oportunidades, donde la inversión en bienes raíces florece.",
            "El clima y la geografía de Villa Florencia ofrecen un entorno ideal para vivir, trabajar y disfrutar.",
            "Villa Florencia, un lugar donde la innovación y la tecnología se unen para impulsar una vida de calidad.",
            "Invierte en Villa Florencia y sé parte de una comunidad próspera y en constante crecimiento, con un futuro brillante."
        ],
        usa: [
            "Estados Unidos ofrece un mercado inmobiliario estable y diversificado para inversores internacionales.",
            "Benefíciate de un sistema legal robusto que protege los derechos de propiedad de los inversores extranjeros.",
            "Accede a oportunidades de inversión en ciudades de rápido crecimiento y mercados emergentes en todo el país.",
            "Aprovecha las tasas de interés históricamente bajas para financiar tus inversiones inmobiliarias.",
            "Diversifica tu portafolio con propiedades en una de las economías más grandes y estables del mundo.",
            "Explora opciones de inversión en sectores de alto rendimiento como tecnología, salud y educación.",
            "Benefíciate de la apreciación a largo plazo del mercado inmobiliario estadounidense.",
            "Accede a un mercado de alquileres robusto, especialmente en áreas metropolitanas y destinos turísticos.",
            "Aprovecha las oportunidades en el mercado de propiedades comerciales y de uso mixto en crecimiento.",
            "Invierte en un país con una infraestructura de clase mundial y una economía impulsada por la innovación."
        ],
        panama: [
            "Panamá, el corazón de América, donde la inversión y el progreso se unen en un solo ritmo.",
            "Descubre el potencial de Panamá, el hub de inversión más dinámico de América Latina.",
            "Panamá, donde la estrategia y la innovación se encuentran en el centro de la inversión internacional.",
            "Invierte en Panamá y aprovecha su posición geográfica única, conectando América del Norte y del Sur.",
            "Panamá, el destino perfecto para inversores que buscan crecimiento y estabilidad en América.",
            "El Canal de Panamá, un símbolo de progreso y conexión global, impulse su inversión en este hub clave.",
            "Panamá, donde la inversión en infraestructura y tecnología impulsa el crecimiento económico sostenible.",
            "Unirse a la comunidad de inversores en Panamá, donde la innovación y el emprendimiento florecen.",
            "Panamá, el lugar donde la inversión y la diversificación se unen para crear oportunidades ilimitadas.",
            "Panamá, el futuro de la inversión en América, donde la visión y la acción se unen para crear un mañana próspero."
        ]
    };

    class WebsiteManager {
        constructor() {
            this.initializeComponents();
        }

        initializeComponents() {
            this.createHeroSlider();
            this.createQuienesSomosSlider();
            this.createFeaturedProperties();
            this.createPropertyCards();
            this.createServiceCards();
            this.createTestimonialsSlider();
            this.createInstagramSlider();
            this.createFAQs();
            this.createInvestReasons();
            this.handleViewDetails();
            this.closeGalleryModal();
            this.loadYouTubeVideos();
            this.initContactForm();
            this.handleBackToTop();
            this.handleScrollAnimation();
            this.handleInstallApp();
            this.handlePreloader();
            this.initChatbot();
            this.improveResponsiveness();
            this.preloadImages();
        }

        createSlider(selector, options) {
            $(selector).slick(options);
        }

        createHeroSlider() {
            const heroSlider = document.querySelector('.hero-slider');
            heroImages.forEach(image => {
                const slide = document.createElement('div');
                slide.style.backgroundImage = `url(${image})`;
                slide.style.backgroundSize = 'cover';
                slide.style.backgroundPosition = 'center';
                heroSlider.appendChild(slide);
            });
            
            this.createSlider('.hero-slider', {
                dots: true,
                infinite: true,
                speed: 500,
                fade: true,
                cssEase: 'linear',
                autoplay: true,
                autoplaySpeed: 5000
            });
        }

        createQuienesSomosSlider() {
            this.createSlider('.quienes-somos-slider', {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        }

        createFeaturedProperties() {
            const propertiesSlider = document.querySelector('.propiedades-slider');
            properties.forEach(property => {
                const propertyCard = this.createPropertyCard(property);
                propertiesSlider.appendChild(propertyCard);
            });
        }

        createPropertyCard(property) {
            const propertyCard = document.createElement('div');
            propertyCard.className = 'property-card';
            propertyCard.innerHTML = `
                <img src="${property.image}" alt="${property.title}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="font-bold text-xl mb-2">${property.title}</h3>
                    <p class="text-gray-700 text-base mb-4">${property.price}</p>
                    <button class="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors view-details" data-id="${property.id}">Ver Detalles</button>
                </div>
            `;
            return propertyCard;
        }

        createPropertyCards() {
            const propertiesGrid = document.getElementById('properties-grid');
            properties.forEach(property => {
                const propertyCard = this.createPropertyCard(property);
                propertiesGrid.appendChild(propertyCard);
            });
            this.initializePropertySlider();
        }

        initializePropertySlider() {
            const slider = document.querySelector('.properties-slider');
            let isDown = false;
            let startX;
            let scrollLeft;

            const mouseDownHandler = (e) => {
                isDown = true;
                slider.classList.add('active');
                startX = e.pageX - slider.offsetLeft;
                scrollLeft = slider.scrollLeft;
            };

            const mouseLeaveHandler = () => {
                isDown = false;
                slider.classList.remove('active');
            };

            const mouseUpHandler = () => {
                isDown = false;
                slider.classList.remove('active');
            };

            const mouseMoveHandler = (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - slider.offsetLeft;
                const walk = (x - startX) * 3;
                slider.scrollLeft = scrollLeft - walk;
            };

            slider.addEventListener('mousedown', mouseDownHandler);
            slider.addEventListener('mouseleave', mouseLeaveHandler);
            slider.addEventListener('mouseup', mouseUpHandler);
            slider.addEventListener('mousemove', mouseMoveHandler);
        }

        createServiceCards() {
            const serviceGrid = document.getElementById('service-grid');
            services.forEach(service => {
                const serviceCard = document.createElement('div');
                serviceCard.className = 'service-card';
                serviceCard.innerHTML = `
                    <i class="${service.icon} text-4xl text-primary mb-4"></i>
                    <h3 class="text-xl font-semibold mb-2">${service.title}</h3>
                    <p class="text-gray-600">${service.description}</p>
                `;
                serviceGrid.appendChild(serviceCard);
            });
        }

        createTestimonialsSlider() {
            const testimonialsSlider = document.getElementById('testimonials-slider');
            testimonials.forEach(testimonial => {
                const slide = document.createElement('div');
                slide.className = 'bg-white p-6 rounded-lg shadow-md';
                slide.innerHTML = `
                    <p class="text-gray-600 mb-4">"${testimonial.text}"</p>
                    <p class="font-semibold">- ${testimonial.name}</p>
                `;
                testimonialsSlider.appendChild(slide);
            });
            
            this.createSlider('#testimonials-slider', {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 5000
            });
        }

        createInstagramSlider() {
            const instagramSlider = document.getElementById('instagram-slider');
            instagramPosts.forEach(post => {
                const slide = document.createElement('div');
                slide.className = 'px-2';
                slide.innerHTML = `
                    <a href="${post.link}" target="_blank" rel="noopener noreferrer">
                        <img src="${post.image}" alt="Instagram post" class="w-full h-64 object-cover rounded-lg">
                    </a>
                `;
                instagramSlider.appendChild(slide);
            });
            
            this.createSlider('#instagram-slider', {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        }

        createFAQs() {
            const faqContainer = document.getElementById('faq-container');
            faqs.forEach((faq, index) => {
                const faqItem = document.createElement('div');
                faqItem.className = 'faq-item';
                faqItem.innerHTML = `
                    <div class="faq-question flex justify-between items-center cursor-pointer">
                        <span>${faq.question}</span>
                        <i class="fas fa-chevron-down faq-icon"></i>
                    </div>
                    <div class="faq-answer mt-2 text-gray-600 hidden">
                        ${faq.answer}
                    </div>
                `;
                faqContainer.appendChild(faqItem);

                const question = faqItem.querySelector('.faq-question');
                question.addEventListener('click', () => {
                    faqItem.classList.toggle('active');
                    const answer = faqItem.querySelector('.faq-answer');
                    answer.classList.toggle('hidden');
                });
            });
        }

        createInvestReasons() {
            const createAccordion = (container, title, reasons, flagUrl) => {
                const accordionHeader = document.createElement('div');
                accordionHeader.className = 'flex items-center cursor-pointer mb-4';
                accordionHeader.innerHTML = `
                    <img src="${flagUrl}" alt="Bandera" class="w-8 h-8 mr-2">
                    <h3 class="text-xl font-bold">${title}</h3>
                    <i class="fas fa-chevron-down ml-auto"></i>
                `;
                container.appendChild(accordionHeader);

                const accordionContent = document.createElement('div');
                accordionContent.className = 'hidden';
                reasons.forEach(reason => {
                    const reasonElement = document.createElement('p');
                    reasonElement.className = 'mb-2';
                    reasonElement.textContent = reason;
                    accordionContent.appendChild(reasonElement);
                });
                container.appendChild(accordionContent);

                accordionHeader.addEventListener('click', () => {
                    accordionContent.classList.toggle('hidden');
                    accordionHeader.querySelector('i').classList.toggle('fa-chevron-down');
                    accordionHeader.querySelector('i').classList.toggle('fa-chevron-up');
                });
            };

            createAccordion(document.getElementById('invest-samborondon'), 'Invertir en Villa Florencia', investReasons.samborondon, 'https://flagcdn.com/w40/ec.png');
            createAccordion(document.getElementById('invest-usa'), 'Invertir en Estados Unidos', investReasons.usa, 'https://flagcdn.com/w40/us.png');
            createAccordion(document.getElementById('invest-panama'), 'Invertir en Panamá', investReasons.panama, 'https://flagcdn.com/w40/pa.png');
        }

        handleViewDetails() {
            document.addEventListener('click', (e) => {
                if (e.target && e.target.classList.contains('view-details')) {
                    const propertyId = parseInt(e.target.dataset.id);
                    const property = properties.find(p => p.id === propertyId);
                    this.showPropertyModal(property);
                }
            });
        }

        showPropertyModal(property) {
            const modal = document.getElementById('gallery-modal');
            const galleryImages = document.getElementById('gallery-images');
            const galleryInfo = document.getElementById('gallery-info');
            
            galleryImages.innerHTML = '';

            const imagesToShow = property.gallery.slice(0, 5);
            
            imagesToShow.forEach((image, index) => {
                const img = document.createElement('img');
                img.src = image;
                img.alt = `${property.title} - Imagen ${index + 1}`;
                img.className = 'w-full h-64 object-cover cursor-pointer';
                img.onclick = () => this.showFullImage(image, index, imagesToShow);
                galleryImages.appendChild(img);
            });
            
            if ($(galleryImages).hasClass('slick-initialized')) {
                $(galleryImages).slick('unslick');
            }
            
            $(galleryImages).slick({
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000
            });
                
            galleryInfo.innerHTML = `
                <h3 class="text-xl font-bold mb-2">${property.title}</h3>
                <p class="mb-2"><strong>Precio:</strong> ${property.price}</p>
                <p class="mb-4">${property.description}</p>
                <h4 class="font-bold mb-2">Características:</h4>
                <ul class="list-disc pl-5 mb-4">
                    ${property.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                <button id="contact-agent" class="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors">Contactar Agente</button>
            `;
            
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            
            document.getElementById('contact-agent').addEventListener('click', () => {
                this.contactAgent(property);
            });
        }

        showFullImage(imageSrc, currentIndex, images) {
            const fullImageContainer = document.getElementById('full-image-container');
            const fullImage = document.getElementById('full-image');
            const prevButton = document.getElementById('prev-image');
            const nextButton = document.getElementById('next-image');
            
            fullImage.src = imageSrc;
            fullImageContainer.classList.remove('hidden');
            
            const updateImage = (index) => {
                fullImage.src = images[index];
            };
            
            prevButton.onclick = () => {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                updateImage(currentIndex);
            };
            
            nextButton.onclick = () => {
                currentIndex = (currentIndex + 1) % images.length;
                updateImage(currentIndex);
            };
            
            fullImageContainer.onclick = (e) => {
                if (e.target === fullImageContainer) {
                    fullImageContainer.classList.add('hidden');
                }
            };
        }

        closeGalleryModal() {
            const closeButton = document.getElementById('close-modal');
            const modal = document.getElementById('gallery-modal');
            
            closeButton.addEventListener('click', () => {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            });
            
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.add('hidden');
                    modal.classList.remove('flex');
                }
            });
        }

        contactAgent(property) {
            const message = `Hola, estoy interesado en la propiedad "${property.title}" con un precio de ${property.price}. ¿Podría proporcionarme más información?`;
            const encodedMessage = encodeURIComponent(message);
            const whatsappLink = `https://wa.me/593995172687?text=${encodedMessage}`;
            window.open(whatsappLink, '_blank');
        }

        loadYouTubeVideos() {
            const youtubeSlider = document.getElementById('youtube-slider');
            const videoIds = ['VIDEO_ID_1', 'VIDEO_ID_2', 'VIDEO_ID_3'];
            
            videoIds.forEach(videoId => {
                const videoContainer = document.createElement('div');
                videoContainer.className = 'youtube-video';
                videoContainer.innerHTML = `
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                `;
                youtubeSlider.appendChild(videoContainer);
            });
            
            this.createSlider('#youtube-slider', {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false
            });
        }

        initContactForm() {
            const form = document.getElementById('contact-form');
            if (form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const { name, email, message } = form.elements;
                    const whatsappMessage = `Nombre: ${name.value}%0AEmail: ${email.value}%0AMensaje: ${message.value}`;
                    const whatsappUrl = `https://wa.me/593995172687?text=${whatsappMessage}`;
                    window.open(whatsappUrl, '_blank');
                    form.reset();
                });
            }
        }

        handleBackToTop() {
            const backToTopButton = document.getElementById('back-to-top');
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 100) {
                    backToTopButton.classList.remove('hidden');
                } else {
                    backToTopButton.classList.add('hidden');
                }
            });
            
            backToTopButton.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        handleScrollAnimation() {
            const fadeElements = document.querySelectorAll('.fade-in-section');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            });
            
            fadeElements.forEach(element => {
                observer.observe(element);
            });
        }

        handleInstallApp() {
            let deferredPrompt;
            const installButton = document.getElementById('install-app');
            
            window.addEventListener('beforeinstallprompt', (e) => {
                e.preventDefault();
                deferredPrompt = e;
                installButton.classList.remove('hidden');
            });
            
            installButton.addEventListener('click', async () => {
                if (deferredPrompt) {
                    deferredPrompt.prompt();
                    const { outcome } = await deferredPrompt.userChoice;
                    if (outcome === 'accepted') {
                        console.log('User accepted the install prompt');
                    } else {
                        console.log('User dismissed the install prompt');
                    }
                    deferredPrompt = null;
                }
            });
        }

        handlePreloader() {
            window.addEventListener('load', () => {
                const preloader = document.getElementById('preloader');
                preloader.style.display = 'none';
            });
        }

        initChatbot() {
            const openChatbotButton = document.getElementById('open-chatbot');
            const closeChatbotButton = document.getElementById('close-chatbot');
            const chatbotWindow = document.getElementById('chatbot-window');
            const chatbotForm = document.getElementById('chatbot-form');
            const chatbotInput = document.getElementById('chatbot-input');
            const chatbotMessages = document.getElementById('chatbot-messages');
            const suggestedQuestions = document.getElementById('suggested-questions');
            
            const initialSuggestedQuestions = [
                "¿Cuáles son los precios de las casas en Villa Florencia?",
                "¿Qué amenidades ofrece Villa Florencia?",
                "¿Cómo puedo agendar una visita a Villa Florencia?"
            ];
            
            const addMessage = (message, isUser = false) => {
                const messageElement = document.createElement('div');
                messageElement.className = `p-2 rounded-lg ${isUser ? 'bg-blue-100 ml-auto' : 'bg-gray-100'} max-w-[80%]`;
                messageElement.textContent = message;
                chatbotMessages.appendChild(messageElement);
                chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
            };
            
            const addSuggestedQuestion = (question) => {
                const questionButton = document.createElement('button');
                questionButton.className = 'bg-gray-200 text-sm px-2 py-1 rounded-full mr-2 mb-2 hover:bg-gray-300 transition-colors';
                questionButton.textContent = question;
                questionButton.addEventListener('click', () => {
                    chatbotInput.value = question;
                    chatbotForm.dispatchEvent(new Event('submit'));
                });
                suggestedQuestions.appendChild(questionButton);
            };
            
            openChatbotButton.addEventListener('click', () => {
                chatbotWindow.classList.remove('hidden');
                if (chatbotMessages.children.length === 0) {
                    addMessage("¡Hola! Soy ARIA, tu asistente virtual de Villa Florencia. ¿En qué puedo ayudarte hoy?");
                    initialSuggestedQuestions.forEach(addSuggestedQuestion);
                }
            });
            
            closeChatbotButton.addEventListener('click', () => {
                chatbotWindow.classList.add('hidden');
            });
            
            chatbotForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const userMessage = chatbotInput.value.trim();
                if (userMessage) {
                    addMessage(userMessage, true);
                    chatbotInput.value = '';
                    suggestedQuestions.innerHTML = '';
                    
                    setTimeout(() => {
                        let botResponse;
                        if (userMessage.toLowerCase().includes('precio')) {
                            botResponse = "Los precios de las casas en Villa Florencia varían según el modelo y las características. Te recomiendo contactar a nuestro equipo de ventas para obtener información detallada y actualizada sobre los precios.";
                        } else if (userMessage.toLowerCase().includes('amenidad')) {
                            botResponse = "Villa Florencia ofrece diversas amenidades, incluyendo áreas verdes, parques infantiles, piscina comunitaria, y seguridad las 24 horas. ¿Te gustaría saber más sobre alguna amenidad en particular?";
                        } else if (userMessage.toLowerCase().includes('visita')) {
                            botResponse = "¡Excelente! Para agendar una visita a Villa Florencia, puedes llamar al 0995172687 o enviar un mensaje de WhatsApp. Nuestro equipo estará encantado de coordinar una visita en el horario que más te convenga.";
                        } else {
                            botResponse = "Gracias por tu pregunta. Para brindarte la información más precisa y actualizada, te sugiero contactar directamente con nuestro equipo de ventas al 0995172687. Estarán encantados de asistirte en todo lo que necesites.";
                        }
                        addMessage(botResponse);
                        
                        const newSuggestedQuestions = [
                            "¿Cuáles son los tipos de casas disponibles?",
                            "¿Cómo es el proceso de compra?",
                            "¿Ofrecen opciones de financiamiento?"
                        ];
                        newSuggestedQuestions.forEach(addSuggestedQuestion);
                    }, 1000);
                }
            });
        }

        improveResponsiveness() {
            const bottomNav = document.querySelector('.bottom-nav');
            let lastScrollTop = 0;
            
            window.addEventListener('scroll', () => {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                if (scrollTop > lastScrollTop) {
                    bottomNav.style.transform = 'translateY(100%)';
                } else {
                    bottomNav.style.transform = 'translateY(0)';
                }
                lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
            }, false);
        }

        preloadImages() {
            const imagesToPreload = [
                ...heroImages,
                ...properties.map(p => p.image),
                ...properties.flatMap(p => p.gallery || [])
            ];
            
            imagesToPreload.forEach(src => {
                const img = new Image();
                img.src = src;
            });
        }
    }

    new WebsiteManager();
});

console.log("Villa Florencia script updated successfully!");