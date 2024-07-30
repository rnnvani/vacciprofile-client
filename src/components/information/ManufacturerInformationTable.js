import React from 'react';

/**
 * ManufacturerInformationTable Component
 *
 * @component
 * @namespace Manufacturer
 * @param {Object} props - The component accepts detailsType, selectedVirus, selectedVaccine, selectedAccreditation, and several handler and data functions as props.
 * @param {string} props.detailsType - The type of detail currently selected, e.g., "Vaccine", "Virus", or "Accreditation".
 * @param {Object} props.selectedVirus - The currently selected virus object.
 * @param {Object} props.selectedVaccine - The currently selected vaccine object.
 * @param {string} props.selectedAccreditation - The currently selected accreditation.
 * @param {Function} props.handleSelectVirus - Function that gets triggered when a virus is selected.
 * @param {Function} props.handleSelectVaccine - Function that gets triggered when a vaccine is selected.
 * @param {Function} props.handleSelectAccreditation - Function that gets triggered when an accreditation is selected.
 * @param {Function} props.getVaccinesByManufacturer - Function that returns a list of vaccines based on the manufacturer.
 * @param {Function} props.getCountriesByVaccine - Function that returns a list of countries where a vaccine is used.
 * @param {Function} props.getRecommendationByVaccine - Function that returns recommendations for a specific vaccine.
 * @param {Function} props.getVirusByVaccine - Function that returns the virus associated with a specific vaccine.
 * @returns {JSX.Element} The Manufacturer Information Table component.
 *
 * @example
 * // Render the ManufacturerInformationTable component with dummy data and functions
 * <ManufacturerInformationTable 
 *   detailsType="Vaccine"
 *   selectedVirus={{ name: 'Virus X' }}
 *   selectedVaccine={{ name: 'Vaccine Y' }}
 *   selectedAccreditation="Accreditation Z"
 *   handleSelectVirus={virus => console.log('Virus selected:', virus)}
 *   handleSelectVaccine={vaccine => console.log('Vaccine selected:', vaccine)}
 *   handleSelectAccreditation={accreditation => console.log('Accreditation selected:', accreditation)}
 *   getVaccinesByManufacturer={() => [{ name: 'Vaccine Y', accreditation: ['Accreditation Z'] }]}
 *   getCountriesByVaccine={vaccine => ['Country A', 'Country B']}
 *   getRecommendationByVaccine={vaccine => 'Recommendation for ' + vaccine.name}
 *   getVirusByVaccine={vaccine => ({ name: 'Virus X' })}
 * />
 */

const ManufacturerInformationTable = ({
    detailsType, 
    selectedVirus, 
    selectedVaccine, 
    selectedAccreditation,
    handleSelectVirus, 
    handleSelectVaccine, 
    handleSelectAccreditation, 
    getVaccinesByManufacturer,
    getCountriesByVaccine, 
    getRecommendationByVaccine, 
    getVirusByVaccine
}) => {
    return <div className='view-header table-responsive m-0'>
        <table className='table table-success w-100 m-0'>
            <thead>
                <tr>
                    <th>Vaccine</th>
                    <th>Virus/ Bacteria</th>
                    <th>Accreditation</th>
                    <th>Countries</th>
                    <th>Recommendation</th>
                </tr>
            </thead>
            <tbody>
                {getVaccinesByManufacturer().map((vaccine, key)=><tr key={key}>
                    <td className='vaccine-cell'>
                        <span
                            className={`${detailsType==="Vaccine" && selectedVaccine.name === vaccine.name ? `selected` : `selectable`}`} 
                            onClick={()=>handleSelectVaccine(vaccine)}>
                            {vaccine.name}
                        </span>
                    </td>
                    <td className='virus-cell'>
                        <span 
                            className={`${detailsType==="Virus" && selectedVirus.name === getVirusByVaccine(vaccine).name ? `selected` : `selectable`}`} 
                            onClick={()=>{handleSelectVirus(getVirusByVaccine(vaccine))}}>{getVirusByVaccine(vaccine).name}
                        </span>
                    </td>
                    <td className='accreditation-cell'>
                        {vaccine.accreditation.map((accreditation, index)=>
                        <span>
                            <span key={index} 
                                className={`${detailsType==="Accreditation" && selectedAccreditation === accreditation ? `selected` : `selectable`}`} 
                                onClick={()=>handleSelectAccreditation(accreditation)}>
                                {accreditation}
                            </span>{index<vaccine.accreditation.length-1 ? <span className='text-decoration-none'>, </span> : ``}
                        </span>)}
                    </td>
                    <td className='country-cell'>
                        {<span className='text-muted'>
                            {getCountriesByVaccine(vaccine)}
                        </span>}
                    </td>
                    <td className='recommendation-cell'>
                        <span>
                            {getRecommendationByVaccine(vaccine)}
                        </span>
                    </td>
                </tr>)}
            </tbody>
        </table>
    </div>
}

export default ManufacturerInformationTable;