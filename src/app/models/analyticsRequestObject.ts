export class ReportDefinition {
    criteria: CohortCriteria;
    groups: [SubReportDefinition[]];
    name: string;

    constructor(criteria, groups, name) {
        this.criteria = criteria;
        this.groups = groups;
        this.name = name;
    }
}

export class SubReportDefinition {
    criteria: CohortCriteria;
    name: string;

    constructor(criteria, name) {
        this.criteria = criteria;
        this.name = name;
    }
}

export class CohortCriteria {
    gender: string;
    encounterCriteria: EncounterCriteria[];
    exclusionCriteria: CohortCriteria[];

    constructor(gender, encounterCriteria, exclusionCriteria?) {
        this.gender = gender;
        this.encounterCriteria = encounterCriteria;
        this.exclusionCriteria = exclusionCriteria;
    }

}

export class EncounterCriteria {
    conceptECL: string;
    has: boolean;

    constructor(conceptECL, has?) {
        this.conceptECL = conceptECL;
        this.has = has;
    }
}
