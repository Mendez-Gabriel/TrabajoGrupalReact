import React from 'react';
import style from './Contact.module.css';


const Contact = () => {
    const { intro, grid, container, sectionHeading, img } = style;

    return (
        <div>
            <div className={container}>
                <section className={`${grid} info`}>
                    <div className="column-xs-12 column-md-1">
                        <div className="about">
                            <h1 className={`${sectionHeading} text-light`}>Sobre Nosotros</h1>
                        </div>
                    </div>
                    <div className='d-flex mt-5'>
                        <div className="column-xs-12 column-md-4">
                            <img src="https://source.unsplash.com/NXiIVnzBwZ8" className={img} />
                        </div>
                        <div className="column-xs-12 column-md-7">
                            <div className={`${intro} text-light`}>
                                <h2>Emiliano Gasco</h2>
                                <p>Crud indignant permissively through burped nodded timorous onto the as wore less ouch far rewound considering so broken dachshund jeepers sanely confident. Contemplated growled apart enthusiastically punitively much much darn onto deep dear returned some cockatoo hungrily fortuitously enchantingly ouch sanely on unceremonious especially much yikes darn.</p>
                                <p>Gecko far one before ouch far indistinctly ouch much doubtfully the alas some classically far insincerely much honey close savage ground according enthusiastic and that then about realistic however more forlornly dear demonstrably a this.</p>

                            </div>
                        </div>

                    </div>
                    <div className='d-flex mt-5'>
                        <div className="column-xs-12 column-md-7">
                            <div className='text-light'>
                                <h2>Gabriel Mendez</h2>
                                <p>Crud indignant permissively through burped nodded timorous onto the as wore less ouch far rewound considering so broken dachshund jeepers sanely confident. Contemplated growled apart enthusiastically punitively much much darn onto deep dear returned some cockatoo hungrily fortuitously enchantingly ouch sanely on unceremonious especially much yikes darn.</p>
                                <p>Gecko far one before ouch far indistinctly ouch much doubtfully the alas some classically far insincerely much honey close savage ground according enthusiastic and that then about realistic however more forlornly dear demonstrably a this.</p>

                            </div>

                        </div>
                        <div className="column-xs-12 column-md-5">
                            <img src="https://source.unsplash.com/8eSrC43qdro" className={img} />
                        </div>
                    </div>

                    <div className='d-flex mt-5'>
                        <div className="column-xs-12 column-md-4">
                            <img src="https://source.unsplash.com/NXiIVnzBwZ8" className={img} />
                        </div>
                        <div className="column-xs-12 column-md-7">
                            <div className={`${intro} text-light`}>
                                <h2>Baurtista Arias</h2>
                                <p>Crud indignant permissively through burped nodded timorous onto the as wore less ouch far rewound considering so broken dachshund jeepers sanely confident. Contemplated growled apart enthusiastically punitively much much darn onto deep dear returned some cockatoo hungrily fortuitously enchantingly ouch sanely on unceremonious especially much yikes darn.</p>
                                <p>Gecko far one before ouch far indistinctly ouch much doubtfully the alas some classically far insincerely much honey close savage ground according enthusiastic and that then about realistic however more forlornly dear demonstrably a this.</p>

                            </div>
                        </div>
                    </div>

                    <div className='d-flex mt-5'>
                        <div className="column-xs-12 column-md-7">
                            <div className='text-light'>
                                <h2>Santiago Sandorino</h2>
                                <p>Crud indignant permissively through burped nodded timorous onto the as wore less ouch far rewound considering so broken dachshund jeepers sanely confident. Contemplated growled apart enthusiastically punitively much much darn onto deep dear returned some cockatoo hungrily fortuitously enchantingly ouch sanely on unceremonious especially much yikes darn.</p>
                                <p>Gecko far one before ouch far indistinctly ouch much doubtfully the alas some classically far insincerely much honey close savage ground according enthusiastic and that then about realistic however more forlornly dear demonstrably a this.</p>

                            </div>

                        </div>
                        <div className="column-xs-12 column-md-5">
                            <img src="https://source.unsplash.com/8eSrC43qdro" className={img} />
                        </div>
                    </div>

                    <div className='d-flex mt-5'>
                        <div className="column-xs-12 column-md-4">
                            <img src="https://source.unsplash.com/NXiIVnzBwZ8" className={img} />
                        </div>
                        <div className="column-xs-12 column-md-7">
                            <div className={`${intro} text-light`}>
                                <h2>Melanie Gonzalez</h2>
                                <p>Crud indignant permissively through burped nodded timorous onto the as wore less ouch far rewound considering so broken dachshund jeepers sanely confident. Contemplated growled apart enthusiastically punitively much much darn onto deep dear returned some cockatoo hungrily fortuitously enchantingly ouch sanely on unceremonious especially much yikes darn.</p>
                                <p>Gecko far one before ouch far indistinctly ouch much doubtfully the alas some classically far insincerely much honey close savage ground according enthusiastic and that then about realistic however more forlornly dear demonstrably a this.</p>

                            </div>
                        </div>
                    </div>

                    <div className='d-flex mt-5 mb-5'>
                        <div className="column-xs-12 column-md-7">
                            <div className='text-light'>
                                <h2>Guada</h2>
                                <p>Crud indignant permissively through burped nodded timorous onto the as wore less ouch far rewound considering so broken dachshund jeepers sanely confident. Contemplated growled apart enthusiastically punitively much much darn onto deep dear returned some cockatoo hungrily fortuitously enchantingly ouch sanely on unceremonious especially much yikes darn.</p>
                                <p>Gecko far one before ouch far indistinctly ouch much doubtfully the alas some classically far insincerely much honey close savage ground according enthusiastic and that then about realistic however more forlornly dear demonstrably a this.</p>

                            </div>

                        </div>
                        <div className="column-xs-12 column-md-5">
                            <img src="https://source.unsplash.com/8eSrC43qdro" className={img} />
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default Contact;