import { GeneralFormValuesType } from "../../AddOrEditStudent/utils/generalFormValues";

export const emotionalAndFamilyRelationshipsFormValues: GeneralFormValuesType[] = [
    {
        component: "textField",
        name: "emotionalRelationshipWithMother",
        id: "emotional-relationship-with-mother",
        type: "text",
        label: "Con la madre",
        placeholder: "Escriba aqui",
    }, {
        component: "textField",
        name: "emotionalRelationshipWithFather",
        id: "emotional-relationship-with-father",
        type: "text",
        label: "Con el padre",
        placeholder: "Escriba aqui",
    }, {
        component: "textField",
        name: "emotionalRelationshipWithPermanentGuardian",
        id: "emotional-relationship-with-permanent-guardian",
        type: "text",
        label: "Con el cuidador permanente",
        placeholder: "Escriba aqui",
    }, {
        component: "textField",
        name: "emotionalRelationshipAnotherFamilyMember",
        id: "emotional-relationship-another-family-member",
        type: "text",
        label: "Con otras personas con las que convive",
        placeholder: "Escriba aqui",
    }, {
        component: "textField",
        name: "emotionalRelationshipWithotherChildren",
        id: "emotional-relationship-withother-children",
        type: "text",
        label: "Con otros niños (no familiares)",
        placeholder: "Escriba aqui",
    }, {
        component: "textField",
        name: "emotionalRelationshipWithThirdParties",
        id: "emotional-relationship-with-third-parties",
        type: "text",
        label: "Con terceros",
        placeholder: "Escriba aqui",
    },

]