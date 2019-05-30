export interface IEnvironmentalIndicator {
    id: number;
    renewable_electricity_consumed: number;
    non_renewable_electricity_consumed: number;
    consumed_gas: number;
    consumed_water: number;
    dangerous_waste_generated: number;
    non_dangerous_waste_generated: number;
    waste_sold: number;
    waste_to_landfield: number;
    waste_recycled: number;
    site: number;
}
