import React from 'react';
import ReactSelect from 'react-select';
const FilterSection = () => {
    return (
        <div className="mt-5">
            <div className="container mx-auto lg:px-8  min-h-[5rem]">
                <div className="border-b-[1px] border-neutral-500 pb-2">
                    <h2 className="font-medium text-2xl text-neutral-700">
                        Search Keyword
                    </h2>
                </div>
                <div className="mt-5 pb-5">
                    <h5 className="font-medium text-1 text-neutral-700">
                        Filter
                    </h5>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4">
                        <div>
                        <ReactSelect
                                id="long-value-select"
                                instanceId="long-value-select"
                                placeholder="Select"
                                options={[]}
                                value={null}
                                classNamePrefix="dropdown"
                                className="erp-dropdown-select"
                                menuPosition="fixed"
                                menuPlacement="auto"
                                maxMenuHeight={200}
                                menuShouldScrollIntoView
                            />
                        </div>
                        <div>
                        <ReactSelect
                                id="long-value-select"
                                instanceId="long-value-select"
                                placeholder="Select"
                                options={[]}
                                value={null}
                                classNamePrefix="dropdown"
                                className="erp-dropdown-select"
                                menuPosition="fixed"
                                menuPlacement="auto"
                                maxMenuHeight={200}
                                menuShouldScrollIntoView
                            />
                        </div>
                        <div>
                        <ReactSelect
                                id="long-value-select"
                                instanceId="long-value-select"
                                placeholder="Select"
                                options={[]}
                                value={null}
                                classNamePrefix="dropdown"
                                className="erp-dropdown-select"
                                menuPosition="fixed"
                                menuPlacement="auto"
                                maxMenuHeight={200}
                                menuShouldScrollIntoView
                            />
                        </div>
                        <div>
                        <ReactSelect
                                id="long-value-select"
                                instanceId="long-value-select"
                                placeholder="Select"
                                options={[]}
                                value={null}
                                classNamePrefix="dropdown"
                                className="erp-dropdown-select"
                                menuPosition="fixed"
                                menuPlacement="auto"
                                maxMenuHeight={200}
                                menuShouldScrollIntoView
                            />
                        </div>
                        
                    </div>
                    <div className='flex justify-end mt-2'>
                      <button className='bg-sky-600 hover:bg-[#24243C] p-2 lg:w-[12rem] w-[10rem] text-white uppercase'>
                        Clear All Filter
                      </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterSection;
