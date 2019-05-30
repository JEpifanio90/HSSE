import { ISideBarMenu } from '../models/sidebar-menu.interface';
import { IDGraph } from '../models/dashboard-graph.interface';

export class HSSEConstants {
    private static BASE_URL = 'https://hsse-api.herokuapp.com/api/v2/';

    // URLs
    public static REPORTS: string = HSSEConstants.BASE_URL + 'reports/';
    public static NEW_USER: string = HSSEConstants.BASE_URL + 'signin/';
    public static USER_LOGIN: string = HSSEConstants.BASE_URL + 'login/';
    public static USERS: string = HSSEConstants.BASE_URL + 'users';
    public static SAFETY_ACTIVITIES: string = HSSEConstants.BASE_URL + 'safety/activities/';
    public static ENVIRONMENTAL_INDICATORS: string = HSSEConstants.BASE_URL + 'environmental/indicators/';
    public static MONTHLY_REPORTS: string = HSSEConstants.BASE_URL + 'monthly/reports/';
    public static PUBLIC_SERVICES: string = HSSEConstants.BASE_URL + 'public';
    public static STATISTICS: string = HSSEConstants.BASE_URL + 'statistics';

    // VIEWS
    public static USER_LOGIN_VIEW = 'userLoginView';
    public static NEW_USER_VIEW = 'newUserView';
    public static PERSONAL_INFO_VIEW = 'personalInfoView';
    public static INCIDENT_DESCRIPTION_VIEW = 'incidentDescriptionView';
    public static EVENT_DESCRIPTION_VIEW = 'eventDescriptionView';
    public static INCIDENT_ANALYSIS_VIEW = 'incidentAnalysisView';
    public static APPROVALS_VIEW = 'approvalsView';
    public static SAFETY_ACTIVITIES_VIEW = 'safetyActivitiesView';
    public static ENVIRONMENTAL_INDICATORS_VIEW = 'environmentalIndicatorsView';
    public static DASHBOARD_VIEW = 'dashboardView';
    public static MONTHLY_REPORTS_VIEW = 'monthlyReportsView';

    // MENU
    public static SIDE_MENU: Array<ISideBarMenu> = [
      {
        title: 'Enviromental indicators',
        icon: 'fa-chart-bar',
        subMenuLinks: [
          { subTitle: 'Create', icon: 'fa-plus-circle', link: './environmental/indicators/create'},
          { subTitle: 'Edit', icon: 'fa-edit', link: './environmental/indicators/edit'},
          { subTitle: 'Show', icon: 'fa-eye', link: './environmental/indicators/show'}
        ]
      },
      {
        title: 'Monthly Reports',
        icon: 'fa-calendar',
        subMenuLinks: [
          { subTitle: 'Create', icon: 'fa-plus-circle', link: './monthly/reports/create'},
          { subTitle: 'Edit', icon: 'fa-edit', link: './monthly/reports/edit'},
          { subTitle: 'Show', icon: 'fa-eye', link: './monthly/reports/show'}
        ]
      },
      {
        title: 'Incident Reports',
        icon: 'fa-file',
        subMenuLinks: [
          { subTitle: 'Create', icon: 'fa-plus-circle', link: './incidents/reports/create'},
          { subTitle: 'Edit', icon: 'fa-edit', link: './incidents/reports/edit'},
          { subTitle: 'Show', icon: 'fa-eye', link: './incidents/reports/show'}
        ]
      },
      {
        title: 'Safety Activities',
        icon: 'fa-users',
        subMenuLinks: [
          { subTitle: 'Create', icon: 'fa-plus-circle', link: './community/activities/create'},
          { subTitle: 'Edit', icon: 'fa-edit', link: './community/activities/edit'},
          { subTitle: 'Show', icon: 'fa-eye', link: './community/activities/show'}
        ]
      }
    ];

    // Graphs
    public static DASHBOARD_GRAPHS: Array<IDGraph> = [
        {
            title: 'Reports',
            subTitle: 'Total/Open/In Progress/Overdue/Closed',
            icon: 'clipboard-list',
            class: 'reports-graph',
            info: {
                labels: ['Total Reports', 'Open', 'In Progress', 'Overdue', 'Closed'],
                datasets: [
                    {
                        data: [],
                        backgroundColor: ['#F44336', '#E91E63', '#9C27B0', '#673AB7'],
                        hoverBackgroundColor: ['#673AB7', '#9C27B0', '#E91E63', '#F44336']
                    }
                ]
            }
        },
        {
            title: 'Users',
            subTitle: 'Employee/Contractors',
            icon: 'users',
            class: 'users-graph',
            info: {
                labels: ['Employees', 'Contractors'],
                datasets: [
                    {
                        data: [],
                        backgroundColor: ['#F44336', '#E91E63'],
                        hoverBackgroundColor: ['#673AB7', '#9C27B0']
                    }
                ]
            }
        },
        {
            title: 'Indicators',
            subTitle: 'Environmental Indicators/Monthly Reports/Safety Activities',
            icon: 'chart-area',
            class: 'indicators-graph',
            info: {
                labels: ['Environmental Indicators', 'Monthly Reports', 'Safety Activities'],
                datasets: [
                    {
                        data: [],
                        backgroundColor: ['#F44336', '#E91E63', '#9C27B0'],
                        hoverBackgroundColor: ['#673AB7', '#9C27B0', '#E91E63']
                    }
                ]
            }
        }
    ];

    // Options
    public static CONTRIBUTING_ACTIONS = [
        { value: 'ONT', name: 'Operating w/o necessary training' },
        { value: 'FMS', name: 'Failure to make secure' },
        { value: 'OUS', name: 'Operating at unsafe speed' },
        { value: 'IWS', name: 'Inadequate warning/signal' },
        { value: 'NSD', name: 'Nullified safety device' },
        { value: 'UDE', name: 'Used defective equipment' },
        { value: 'UEU', name: 'Used equipment unsafely' },
        { value: 'UWE', name: 'Used wrong tool/equipment' },
        { value: 'IGD', name: 'Inadequate guard/safety device' },
        { value: 'HA', name: 'Hazardous attire' },
        { value: 'FEH', name: 'Fire or explosion hazard' },
        { value: 'UAM', name: 'Unsecured against movement' },
        { value: 'PH', name: 'Poor housekeeping' },
        { value: 'POH', name: 'Protruding object hazard' }
    ];
    public static CONTRIBUTING_CONDITIONS = [
        { value: 'IGD', name: 'Inadequate guard/safety device' },
        { value: 'HA', name: 'Hazardous attire' },
        { value: 'IWS', name: 'Inadequate warning/signal' },
        { value: 'UAM', name: 'Unsecured against movement' },
        { value: 'PH', name: 'Poor housekeeping' },
        { value: 'POH', name: 'Protruding object hazard' },
        { value: 'CCC', name: 'Close clearance/congestion' },
        { value: 'HAS', name: 'Hazardous arrangement/storage' },
        { value: 'DTE', name: 'Defective tools/equipment' },
        { value: 'AC', name: 'Atmospheric condition' },
        { value: 'INH', name: 'Illumination/noise hazard' },
        { value: 'OUC', name: 'Other unsafe condition' },
        { value: 'NUC', name: 'No Unsafe condition' }
    ];
    public static INFLUENCE_CONTRIBUTING_ACTIONS = [
        { value: 'UJH', name: 'Unaware of job hazards' },
        { value: 'ITH', name: 'Inattention to hazard' },
        { value: 'USM', name: 'Unaware of safe method' },
        { value: 'LLJS', name: 'Low level job skill' },
        { value: 'TGST', name: 'Tried to gain or save time' },
        { value: 'TAEF', name: 'Tried to avoid extra effort' },
        { value: 'TAD', name: 'Tried to avoid discomfort' },
        { value: 'CBE', name: 'Caused by employee' },
        { value: 'CAE', name: 'Caused by another employee' },
        { value: 'DNU', name: 'Defective from normal use' },
        { value: 'ISI', name: 'Inadequate safety inspection' },
        { value: 'IHC', name: 'Inadequate housekeeping/clean-up' },
        { value: 'FDC', name: 'Faulty desing/construction' }
    ];
    public static INFLUENCE_CONTRIBUTING_CONDITIONS = [
        { value: 'CBE', name: 'Caused by employee' },
        { value: 'CAE', name: 'Caused by another employee' },
        { value: 'DNU', name: 'Defective from normal use' },
        { value: 'DAM', name: 'Defective via abuse/misuse' },
        { value: 'ISI', name: 'Inadequate safety inspection' },
        { value: 'IHC', name: 'Inadequate housekeeping/clean-up' },
        { value: 'FDC', name: 'Faulty desing/construction' },
        { value: 'OC', name: 'Outside contractor' },
        { value: 'IPM', name: 'Inadequate preventive maintenance' },
        { value: 'PP', name: 'Purchasing practice' },
        { value: 'DE', name: 'Deteriorating exposure' },
        { value: 'MA', name: 'Management acceptance' },
        { value: 'OSC', name: 'Other source case' },
        { value: 'USC', name: 'Unkwon source cause' }
    ];
    public static GENDERS = [
        { value: 'F', name: 'Female' },
        { value: 'M', name: 'Male' }
    ];
    public static COMMON_CHOICES = [
        { value: 'Y', name: 'Yes' },
        { value: 'N', name: 'No' },
        { value: 'N/A', name: 'No Answer' }
    ];
    public static CASE_TYPES = [
        { value: 'FA', name: 'First Aids' },
        { value: 'MT', name: 'Medical Treatment' },
        { value: 'RA', name: 'Restricted Activity' },
        { value: 'LD', name: 'Lost Days' },
        { value: 'IFE', name: 'Injury Free Event' }
    ];
    public static ACCIDENT_TYPES = [
        { value: 'AE', name: 'Automatic Equipment' },
        { value: 'RE', name: 'Robotic Equipment' },
        { value: 'TI', name: 'Trapped in' },
        { value: 'FDL', name: 'Falling from Different Level' },
        { value: 'SLF', name: 'Same level fall' },
        { value: 'ER', name: 'Electric risk' },
        { value: 'HEC', name: 'Hazardous Energy Control (LOTO)' },
        { value: 'CS', name: 'Confined Space' },
        { value: 'PV', name: 'Pressure Vessels' },
        { value: 'ME', name: 'Mobile Equipment' },
        { value: 'CHS', name: 'Cranes/Hoists/Slings' },
        { value: 'F', name: 'Fire' }
    ];
    public static OTHER_RESULTS = [
        { value: 'LC', name: 'Lost of Consciousness' },
        { value: 'TT', name: 'Temporal Transfer' },
        { value: 'PT', name: 'Permanent Transfer' },
        { value: 'ET', name: 'Employee Termination' },
        { value: 'PR', name: 'Permanent Restriction' },
        { value: 'TD', name: 'Total Disability' },
        { value: 'N/A', name: 'None' }
    ];
    public static INJURY_MECHANISMS = [
        { value: 'SB', name: 'Struck by' },
        { value: 'SA', name: 'Struck against' },
        { value: 'CW', name: 'Contact With' },
        { value: 'CB', name: 'Contacted By' },
        { value: 'TI', name: 'Trapped In' },
        { value: 'TO', name: 'Trapped On' },
        { value: 'TB', name: 'Trapped between' },
        { value: 'SLF', name: 'Same Level Fall' },
        { value: 'DLF', name: 'Different Level Fall' },
        { value: 'SS', name: 'Sprain/Strain' },
        { value: 'E', name: 'Exposure' }
    ];
    public static FATALITY_POTENTIAL = [
        { value: 'H', name: 'High' },
        { value: 'M', name: 'Medium' },
        { value: 'L', name: 'Low' }
    ];
    public static STATUS_CHOICES = [
        { value: 'OV', name: 'Overdue' },
        { value: 'CL', name: 'Closed' },
        { value: 'IP', name: 'In progress' },
        { value: 'O', name: 'Open' }
    ];
    public static JOB_GROUPS = [
        { value: 'C', name: 'Construction' },
        { value: 'A', name: 'Assembly' },
        { value: 'Q', name: 'Quality' },
        { value: 'F', name: 'Furnance' }
    ];
    public static BODY_SIDE = [
        { value: 'L', name: 'Left' },
        { value: 'R', name: 'Right' },
        { value: 'B', name: 'Both' }
    ];
}
