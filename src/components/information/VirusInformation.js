import React from 'react';

/**
 * VirusInformation Component
 *
 * @component
 * @namespace Virus
 * @param {Object} props - The component accepts selectedVirus and italizeScientificNames as props.
 * @param {Object} props.selectedVirus - The selected virus object containing its details.
 * @param {string} props.selectedVirus.name - The name of the selected virus.
 * @param {string} props.selectedVirus.description - The description of the selected virus.
 * @param {Function} props.italizeScientificNames - Function that converts scientific names in the description to italicized text.
 * @returns {JSX.Element} The Virus Information component.
 *
 * @example
 * // Example usage of VirusInformation component
 * <VirusInformation 
 *    selectedVirus={{ 
 *        name: 'COVID-19', 
 *        description: 'Severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2) is the virus that causes COVID-19.'
 *    }} 
 *    italizeScientificNames={(text) => text.replace(/(SARS-CoV-2)/g, '<i>$1</i>')} 
 * />
 */

const VirusInformation = ({selectedVirus, italizeScientificNames}) => {
    return <div className='slide-left'>
        <h4 className='report-heading'>{selectedVirus.name}</h4>
        <p>{italizeScientificNames(selectedVirus.description)}</p>
    </div>
}

export default VirusInformation;