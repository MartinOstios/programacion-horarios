import { StudyPlan } from './components/StudyPlan/StudyPlan';
import './App.css';
import { useState } from 'react';

function App() {



    return (
        <div>
            <div className="academic-info">
                <h1>Historial Académico</h1>
                <p>Plan estudios: {data.plan}</p>
                <p>Estudiante: {data.nombre}</p>
            </div>
            <div className="graph">
                <StudyPlan graph={data.asignaturas} />
            </div>

        </div>
    );
}

export default App;

let data = {
    "plan": "1020",
    "jornada": "D",
    "usuario": "¿?",
    "nombre": "OSTIOS ARIAS MARTIN",
    "codigo_est": "10202200132",
    "asignaturas": [
        {
            "tipo": "Microcurrículo",
            "semestres": [
                {
                    "num_semestre": 1,
                    "asignaturas": [
                        {
                            "nombre": "Teoría de Sistemas",
                            "codigo": "103004",
                            "creditos": 3,
                            "semestre": 1,
                            "vista": true,
                            "periodo": "2022-01",
                            "nota": 4.4
                        },
                        {
                            "nombre": "Lógica de Programación",
                            "codigo": "103002",
                            "creditos": 3,
                            "semestre": 1,
                            "vista": true,
                            "periodo": "2022-01",
                            "nota": 5.0
                        }
                    ]
                },
                {
                    "num_semestre": 2,
                    "asignaturas": [
                        {
                            "nombre": "Técnicas de Programación",
                            "codigo": "103007",
                            "requisitos": [
                                "103002"
                            ],
                            "creditos": 3,
                            "semestre": 2,
                            "vista": true,
                            "periodo": "2022-03",
                            "nota": 4.8
                        },
                        {
                            "nombre": "Fundamentos de POO",
                            "codigo": "103008",
                            "requisitos": [
                                "103002"
                            ],
                            "creditos": 3,
                            "semestre": 2,
                            "vista": true,
                            "periodo": "2022-03",
                            "nota": 5.0
                        }
                    ]
                },
                {
                    "num_semestre": 3,
                    "asignaturas": [
                        {
                            "nombre": "Estructura de Datos",
                            "codigo": "103011",
                            "requisitos": [
                                "103007"
                            ],
                            "creditos": 3,
                            "semestre": 3,
                            "vista": true,
                            "periodo": "2023-01",
                            "nota": 4.8
                        },
                        {
                            "nombre": "Programación Orientada a Objetos",
                            "codigo": "103018",
                            "requisitos": [
                                "103007",
                                "103008"
                            ],
                            "creditos": 3,
                            "semestre": 3,
                            "vista": true,
                            "periodo": "2023-01",
                            "nota": 4.6
                        },
                        {
                            "nombre": "Matemáticas Discretas",
                            "codigo": "104027",
                            "creditos": 4,
                            "semestre": 3,
                            "vista": true,
                            "periodo": "2023-01",
                            "nota": 4.6
                        }
                    ]
                },
                {
                    "num_semestre": 4,
                    "asignaturas": [
                        {
                            "nombre": "Bases de Datos I",
                            "codigo": "109180",
                            "requisitos": [
                                "103011"
                            ],
                            "creditos": 3,
                            "semestre": 4,
                            "vista": true,
                            "periodo": "2023-03",
                            "nota": 4.5
                        },
                        {
                            "nombre": "Sistemas Operativos",
                            "codigo": "103027",
                            "requisitos": [
                                "103011"
                            ],
                            "creditos": 3,
                            "semestre": 4,
                            "vista": true,
                            "periodo": "2023-03",
                            "nota": 4.7
                        },
                        {
                            "nombre": "Ingeniería de Software I",
                            "codigo": "103022",
                            "requisitos": [
                                "103018"
                            ],
                            "creditos": 3,
                            "semestre": 4,
                            "vista": true,
                            "periodo": "2023-03",
                            "nota": 4.9
                        }
                    ]
                },
                {
                    "num_semestre": 5,
                    "asignaturas": [
                        {
                            "nombre": "Paradigmas de Lenguajes",
                            "codigo": "109182",
                            "requisitos": [
                                "104029",
                                "104027",
                                "103018"
                            ],
                            "creditos": 3,
                            "semestre": 5,
                            "vista": false
                        },
                        {
                            "nombre": "Redes LAN",
                            "codigo": "103126",
                            "req_creditos": 56,
                            "creditos": 3,
                            "semestre": 5,
                            "vista": true,
                            "periodo": "2024-01",
                            "nota": 5
                        },
                        {
                            "nombre": "Programación Backend",
                            "codigo": "109183",
                            "requisitos": [
                                "109180"
                            ],
                            "creditos": 3,
                            "semestre": 5,
                            "vista": true,
                            "periodo": "2024-01",
                            "nota": 5
                        },
                        {
                            "nombre": "Ingeniería de Software II",
                            "codigo": "103093",
                            "requisitos": [
                                "103022"
                            ],
                            "creditos": 3,
                            "semestre": 5,
                            "vista": true,
                            "periodo": "2024-01",
                            "nota": 5
                        }
                    ]
                },
                {
                    "num_semestre": 6,
                    "asignaturas": [
                        {
                            "nombre": "Electrónica Digital y Arquitectura de Computadores",
                            "codigo": "109184",
                            "requisitos": [
                                "109179"
                            ],
                            "creditos": 3,
                            "semestre": 6,
                            "vista": false
                        },
                        {
                            "nombre": "Modelamiento y Simulación",
                            "codigo": "109185",
                            "requisitos": [
                                "109057"
                            ],
                            "creditos": 3,
                            "semestre": 6,
                            "vista": false
                        },
                        {
                            "nombre": "Procesadores de Lenguajes",
                            "codigo": "109186",
                            "requisitos": [
                                "109182"
                            ],
                            "creditos": 2,
                            "semestre": 6,
                            "vista": false
                        },
                        {
                            "nombre": "Diseño de Algoritmos",
                            "codigo": "103021",
                            "requisitos": [
                                "109182"
                            ],
                            "creditos": 3,
                            "semestre": 6,
                            "vista": false
                        },
                        {
                            "nombre": "Programación Frontend",
                            "codigo": "109187",
                            "requisitos": [
                                "109183"
                            ],
                            "creditos": 3,
                            "semestre": 6,
                            "vista": false
                        }
                    ]
                },
                {
                    "num_semestre": 7,
                    "asignaturas": [
                        {
                            "nombre": "Sistemas Embebidos",
                            "codigo": "109104",
                            "requisitos": [
                                "109184"
                            ],
                            "creditos": 3,
                            "semestre": 7,
                            "vista": false
                        },
                        {
                            "nombre": "Ciencia de los Datos",
                            "codigo": "109188",
                            "requisitos": [
                                "109057"
                            ],
                            "creditos": 3,
                            "semestre": 7,
                            "vista": false
                        },
                        {
                            "nombre": "Énfasis Profesional",
                            "codigo": "103127",
                            "requisitos": [
                                "103126"
                            ],
                            "creditos": 3,
                            "semestre": 7,
                            "vista": false
                        },
                        {
                            "nombre": "Bases de Datos II",
                            "codigo": "109181",
                            "requisitos": [
                                "109180"
                            ],
                            "creditos": 2,
                            "semestre": 7,
                            "vista": false
                        }
                    ]
                },
                {
                    "num_semestre": 8,
                    "asignaturas": [
                        {
                            "nombre": "Inteligencia Artificial",
                            "codigo": "103117",
                            "requisitos": [
                                "109057"
                            ],
                            "creditos": 3,
                            "semestre": 8,
                            "vista": false
                        },
                        {
                            "nombre": "Sistemas de Información y Organizaciones",
                            "codigo": "103125",
                            "requisitos": [
                                "103004"
                            ],
                            "creditos": 3,
                            "semestre": 8,
                            "vista": true,
                            "periodo": "2024-01",
                            "nota": 5
                        },
                        {
                            "nombre": "Programación de Dispositivos Móviles",
                            "codigo": "109189",
                            "requisitos": [
                                "109183"
                            ],
                            "creditos": 3,
                            "semestre": 8,
                            "vista": false
                        },
                        {
                            "nombre": "Proyecto de Desarrollo de Software",
                            "codigo": "103135",
                            "requisitos": [
                                "103093",
                                "109187"
                            ],
                            "creditos": 2,
                            "semestre": 8,
                            "vista": false
                        }
                    ]
                },
                {
                    "num_semestre": 9,
                    "asignaturas": []
                },
                {
                    "num_semestre": 10,
                    "asignaturas": [
                        {
                            "nombre": "Gerencia de Proyectos Tecnológicos",
                            "codigo": "103118",
                            "requisitos": [
                                "103093"
                            ],
                            "creditos": 2,
                            "semestre": 10,
                            "vista": false
                        },
                        {
                            "nombre": "Práctica Empresarial",
                            "codigo": "103136",
                            "requisitos": [
                                "109189",
                                "103135"
                            ],
                            "creditos": 9,
                            "semestre": 10,
                            "vista": false
                        }
                    ]
                }
            ]
        },
        {
            "tipo": "Mesocurrículo",
            "semestres": [
                {
                    "num_semestre": 1,
                    "asignaturas": [
                        {
                            "nombre": "Matemáticas Básicas",
                            "codigo": "104066",
                            "creditos": 4,
                            "semestre": 1,
                            "vista": true,
                            "periodo": "2022-01",
                            "nota": 4.6
                        },
                        {
                            "nombre": "Fundamentos de Ingeniería",
                            "codigo": "100010",
                            "creditos": 2,
                            "semestre": 1,
                            "vista": true,
                            "periodo": "2022-01",
                            "nota": 5.0
                        }
                    ]
                },
                {
                    "num_semestre": 2,
                    "asignaturas": [
                        {
                            "nombre": "Álgebra Lineal",
                            "codigo": "104029",
                            "creditos": 3,
                            "semestre": 2,
                            "vista": true,
                            "periodo": "2022-03",
                            "nota": 4.6
                        },
                        {
                            "nombre": "Cálculo Diferencial",
                            "codigo": "104030",
                            "requisitos": [
                                "104066"
                            ],
                            "creditos": 3,
                            "semestre": 2,
                            "vista": true,
                            "periodo": "2022-03",
                            "nota": 4.6
                        }
                    ]
                },
                {
                    "num_semestre": 3,
                    "asignaturas": [
                        {
                            "nombre": "Física Mecánica",
                            "codigo": "109178",
                            "requisitos": [
                                "104030"
                            ],
                            "creditos": 4,
                            "semestre": 3,
                            "vista": true,
                            "periodo": "2023-01",
                            "nota": 4.5
                        },
                        {
                            "nombre": "Cálculo Integral",
                            "codigo": "104031",
                            "requisitos": [
                                "104030"
                            ],
                            "creditos": 3,
                            "semestre": 3,
                            "vista": true,
                            "periodo": "2023-01",
                            "nota": 4.4
                        }
                    ]
                },
                {
                    "num_semestre": 4,
                    "asignaturas": [
                        {
                            "nombre": "Electricidad y Magnetismo",
                            "codigo": "109179",
                            "requisitos": [
                                "109178"
                            ],
                            "creditos": 4,
                            "semestre": 4,
                            "vista": true,
                            "periodo": "2023-03",
                            "nota": 4.3
                        },
                        {
                            "nombre": "Estadística y Probabilidad",
                            "codigo": "104036",
                            "requisitos": [
                                "104031"
                            ],
                            "creditos": 3,
                            "semestre": 4,
                            "vista": true,
                            "periodo": "2023-03",
                            "nota": 3.8
                        },
                        {
                            "nombre": "Cálculo Vectorial",
                            "codigo": "104032",
                            "requisitos": [
                                "104031"
                            ],
                            "creditos": 3,
                            "semestre": 4,
                            "vista": true,
                            "periodo": "2023-03",
                            "nota": 4.5
                        }
                    ]
                },
                {
                    "num_semestre": 5,
                    "asignaturas": [
                        {
                            "nombre": "Ecuaciones Diferenciales",
                            "codigo": "104033",
                            "requisitos": [
                                "104031"
                            ],
                            "creditos": 3,
                            "semestre": 5,
                            "vista": true,
                            "periodo": "2024-01",
                            "nota": 5
                        },
                        {
                            "nombre": "Métodos Numéricos",
                            "codigo": "109057",
                            "requisitos": [
                                "104036",
                                "104032"
                            ],
                            "creditos": 3,
                            "semestre": 5,
                            "vista": true,
                            "periodo": "2024-01",
                            "nota": 5
                        }
                    ]
                },
                {
                    "num_semestre": 6,
                    "asignaturas": []
                },
                {
                    "num_semestre": 7,
                    "asignaturas": []
                },
                {
                    "num_semestre": 8,
                    "asignaturas": []
                },
                {
                    "num_semestre": 9,
                    "asignaturas": []
                },
                {
                    "num_semestre": 10,
                    "asignaturas": []
                }
            ]
        },
        {
            "tipo": "Macrocurrículo",
            "semestres": [
                {
                    "num_semestre": 1,
                    "asignaturas": [
                        {
                            "nombre": "Fundamentos Básicos",
                            "codigo": "114081",
                            "creditos": 0,
                            "semestre": 1,
                            "vista": false
                        },
                        {
                            "nombre": "Competencias Comunicativas",
                            "codigo": "100059",
                            "creditos": 3,
                            "semestre": 1,
                            "vista": true,
                            "periodo": "2022-01",
                            "nota": 4.2
                        },
                        {
                            "nombre": "Inglés I",
                            "codigo": "151601",
                            "creditos": 1,
                            "semestre": 1,
                            "vista": true,
                            "periodo": "2022-01",
                            "nota": 4.2
                        }
                    ]
                },
                {
                    "num_semestre": 2,
                    "asignaturas": [
                        {
                            "nombre": "Emprendimiento",
                            "codigo": "101241",
                            "creditos": 3,
                            "semestre": 2,
                            "vista": true,
                            "periodo": "2022-01",
                            "nota": 4.6
                        },
                        {
                            "nombre": "Ética",
                            "codigo": "105038",
                            "creditos": 2,
                            "semestre": 2,
                            "vista": true,
                            "periodo": "2022-03",
                            "nota": 4.7
                        },
                        {
                            "nombre": "Inglés II",
                            "codigo": "151602",
                            "requisitos": [
                                "151601"
                            ],
                            "creditos": 1,
                            "semestre": 2,
                            "vista": true,
                            "periodo": "2022-03",
                            "nota": 4.7
                        }
                    ]
                },
                {
                    "num_semestre": 3,
                    "asignaturas": [
                        {
                            "nombre": "Inglés III",
                            "codigo": "151603",
                            "requisitos": [
                                "151602"
                            ],
                            "creditos": 1,
                            "semestre": 3,
                            "vista": true,
                            "periodo": "2022-03",
                            "nota": 4.4
                        }
                    ]
                },
                {
                    "num_semestre": 4,
                    "asignaturas": []
                },
                {
                    "num_semestre": 5,
                    "asignaturas": []
                },
                {
                    "num_semestre": 6,
                    "asignaturas": [
                        {
                            "nombre": "Filosofía de la Ciencia",
                            "codigo": "105036",
                            "req_creditos": 50,
                            "creditos": 2,
                            "semestre": 6,
                            "vista": true,
                            "periodo": "2023-03",
                            "nota": 4.5
                        },
                        {
                            "nombre": "Inglés IV",
                            "codigo": "151604",
                            "requisitos": [
                                "151603"
                            ],
                            "creditos": 1,
                            "semestre": 6,
                            "vista": true,
                            "periodo": "2023-01",
                            "nota": 4.4
                        }
                    ]
                },
                {
                    "num_semestre": 7,
                    "asignaturas": [
                        {
                            "nombre": "Proceso de Investigación I",
                            "codigo": "100030",
                            "requisitos": [
                                "105036"
                            ],
                            "creditos": 3,
                            "semestre": 7,
                            "vista": true,
                            "periodo": "2024-01",
                            "nota": 5
                        },
                        {
                            "nombre": "Inglés V",
                            "codigo": "151605",
                            "requisitos": [
                                "151604"
                            ],
                            "creditos": 1,
                            "semestre": 7,
                            "vista": false
                        }
                    ]
                },
                {
                    "num_semestre": 8,
                    "asignaturas": [
                        {
                            "nombre": "Cultura Política",
                            "codigo": "105042",
                            "creditos": 2,
                            "semestre": 8,
                            "vista": true,
                            "periodo": "2022-03",
                            "nota": 4.0
                        },
                        {
                            "nombre": "Inglés VI",
                            "codigo": "151606",
                            "requisitos": [
                                "151605"
                            ],
                            "creditos": 1,
                            "semestre": 8,
                            "vista": false
                        }
                    ]
                },
                {
                    "num_semestre": 9,
                    "asignaturas": [
                        {
                            "nombre": "Paz y Competitividad",
                            "codigo": "100063",
                            "req_creditos": 140,
                            "creditos": 12,
                            "semestre": 9,
                            "vista": false
                        },
                        {
                            "nombre": "Desarrollo Sostenible",
                            "codigo": "105041",
                            "req_creditos": 140,
                            "creditos": 2,
                            "semestre": 9,
                            "vista": false
                        }
                    ]
                },
                {
                    "num_semestre": 10,
                    "asignaturas": [
                        {
                            "nombre": "Proceso de Investigación II",
                            "codigo": "100031",
                            "requisitos": [
                                "100030"
                            ],
                            "creditos": 3,
                            "semestre": 10,
                            "vista": false
                        }
                    ]
                }
            ]
        }
    ]
}