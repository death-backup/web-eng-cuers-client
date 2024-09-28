"use client";
import {useTable} from "@/hooks/useTable";
import GenericTable from "@/components/GenericTablePage";
import {BillSectorType, columns} from "@/app/app/billing-sectors/columns";

export default function BillingSectors() {
    const newExamActivityType: BillSectorType = {
        bill_sector_id: -1,
        bill_sector_name: ""
    }
    const {
        data,
        isLoading,
        createMutation, updateMutation, deleteMutation,
        isError
    } = useTable<BillSectorType>("/bill-sectors.json");

    return (
        <div>
            {
                data &&
                <GenericTable columns={columns} newRow={newExamActivityType}
                              data={data} isLoading={isLoading}
                              isError={isError} createMutation={createMutation}
                              updateMutation={updateMutation}
                              deleteMutation={deleteMutation}/>
            }
        </div>
    );
}
