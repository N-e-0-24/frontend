import React ,{useState} from 'react'


const Faq = () => {
    const [showContent, setShowContent] = useState(false);
    const [showContent2, setShowContent2] = useState(false);
    const [showContent3,setShowContent3] = useState(false);

    const toggleContent = () => {
      setShowContent(!showContent);}


    const toggleContent2 = () => {
        setShowContent2(!showContent);}
    
    const toggleContent3 = () => {
            setShowContent3(!showContent);}




    return (
        <div>
            <div className="py-16 mx-auto w-5/6 max-w-4xl">
                <h3 className="mb-12 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                    Frequently Asked Questions
                </h3>
                <hr className="border-b border-gray-100"/>
                <div className="shadow rounded border border-gray-100 border-t-0">
      <div className="p-4 text-xl relative font-medium">
        More questions?!
        <button
          aria-label="question-expand-arrow"
          className="text-xl absolute top-0 right-0 p-4 focus:outline-none"
          onClick={toggleContent}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-down"
            className={`svg-inline--fa fa-chevron-down fa-w-14 fa-1x w-6 h-6 ${
              showContent ? "transform rotate-180" : ""
            }`}
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
            ></path>
          </svg>
        </button>
      </div>
      <div className={`${showContent ? "" : "hidden"} p-4`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </div>
 
                    <div className="shadow rounded border border-gray-100 border-t-0">
                        <div className="p-4 text-xl relative font-medium">
                            This is another question?
                            <button
          aria-label="question-expand-arrow"
          className="text-xl absolute top-0 right-0 p-4 focus:outline-none"
          onClick={toggleContent2}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-down"
            className={`svg-inline--fa fa-chevron-down fa-w-14 fa-1x w-6 h-6 ${
              showContent2 ? "transform rotate-180" : ""
            }`}
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
            ></path>
          </svg>
        </button>
                        </div>
                        <div className="hidden p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                    <div className="shadow rounded border border-gray-100 border-t-0">
                        <div className="p-4 text-xl relative font-medium">More questions?!
                        <button
          aria-label="question-expand-arrow"
          className="text-xl absolute top-0 right-0 p-4 focus:outline-none"
          onClick={toggleContent3}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-down"
            className={`svg-inline--fa fa-chevron-down fa-w-14 fa-1x w-6 h-6 ${
              showContent3 ? "transform rotate-180" : ""
            }`}
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
            ></path>
          </svg>
        </button>
                        </div>
                        <div className={`${showContent3 ? "" : "hidden"} p-4`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
                    </div>
            </div>
        </div>
    )
}

export default Faq
