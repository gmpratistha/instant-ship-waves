
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TermsAndConditionsProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TermsAndConditions = ({ open, onOpenChange }: TermsAndConditionsProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-xl">Terms and Conditions</DialogTitle>
          <DialogDescription>
            Please read these terms carefully before using our services.
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-sm">
            <section>
              <h3 className="font-bold text-lg">1. Liability for Loss, Damage, or Delay</h3>
              <p className="mt-2">
                OrderInstant's liability is limited to the declared value of the shipment or the actual value of the loss, whichever is less. 
                We shall not be liable for any indirect, incidental, or consequential damages, including but not limited to lost profits, 
                loss of opportunity, or any other special damages. OrderInstant's maximum liability for any shipment is $100 unless a higher 
                value is declared and additional insurance fees are paid at the time of shipping.
              </p>
              <p className="mt-2">
                OrderInstant is not liable for delays caused by circumstances beyond our control, including customs delays, 
                recipient unavailability, or natural disasters. Delivery times are estimates and not guaranteed unless 
                expressly stated and purchased as a guarantee service.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-lg">2. COD (Cash on Delivery)</h3>
              <p className="mt-2">
                When using our Cash on Delivery (COD) service, OrderInstant acts as a collection agent only and does not assume 
                any liability for the payment collected. If a recipient refuses payment, the shipment will be returned to the sender, 
                who will be responsible for all shipping costs, both original and return. COD services are subject to additional fees 
                and are available only in select regions and for specific service types.
              </p>
              <p className="mt-2">
                OrderInstant reserves the right to hold COD funds for up to 10 business days before releasing to the sender to 
                ensure payment clearance. All COD collections are subject to verification.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-lg">3. Restrictions and Responsibilities</h3>
              <div className="mt-2 space-y-4">
                <div>
                  <h4 className="font-semibold">Proper Packaging:</h4>
                  <p>
                    Customers are responsible for ensuring items are properly packaged to withstand normal transportation 
                    handling. OrderInstant is not liable for damage resulting from improper packaging. All items must be packed 
                    in containers appropriate for the contents, with adequate cushioning material and sealed securely. 
                    OrderInstant reserves the right to reject or repackage (at additional cost) any shipment deemed 
                    inadequately packaged.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold">Accurate Information:</h4>
                  <p>
                    Customers must provide complete and accurate information regarding the shipment, including precise delivery 
                    addresses, contact information, and detailed contents description. OrderInstant is not responsible for 
                    delays or failed deliveries resulting from incorrect or incomplete shipping information. Additional fees 
                    may apply for address corrections or redelivery attempts.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold">Customs Clearance:</h4>
                  <p>
                    For international shipments, the sender is responsible for providing all required customs documentation 
                    and ensuring compliance with the destination country's import regulations. OrderInstant does not guarantee 
                    customs clearance and is not liable for shipments refused or delayed by customs authorities. All duties, 
                    taxes, and customs fees are the responsibility of the recipient unless otherwise specified and pre-arranged.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="font-bold text-lg">4. Dispute Resolution</h3>
              <div className="mt-2 space-y-4">
                <div>
                  <h4 className="font-semibold">Time-Barred Claims:</h4>
                  <p>
                    All claims for loss, damage, or delay must be filed in writing within 30 days from the date of delivery 
                    (or expected delivery for lost shipments). Claims not reported within this timeframe are waived and barred. 
                    Claims must include adequate documentation, including original packaging when claiming damage, proof of value, 
                    and detailed description of the loss.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold">Governing Law:</h4>
                  <p>
                    These terms and conditions shall be governed by and construed in accordance with the laws of the jurisdiction 
                    where OrderInstant is incorporated, without giving effect to any choice of law principles. Any legal action 
                    arising from these terms must be filed exclusively in the courts of this jurisdiction, and customers consent 
                    to the personal jurisdiction of such courts.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="font-bold text-lg">5. Declaration of Value and Insurance</h3>
              <div className="mt-2 space-y-4">
                <div>
                  <h4 className="font-semibold">Insurance:</h4>
                  <p>
                    Additional shipping insurance is available for purchase at the time of shipment. Insurance covers the 
                    declared value of items against loss or damage during transit, subject to verification and documentation 
                    of actual value. Certain items are not eligible for insurance coverage, including but not limited to: 
                    currency, precious stones, antiques, and items of extraordinary value. Insurance claims require supporting 
                    documentation and are subject to investigation.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold">Force Majeure:</h4>
                  <p>
                    OrderInstant shall not be liable for any failure to perform its obligations where such failure is a result 
                    of Acts of Nature (including fire, flood, earthquake, storm, hurricane, or other natural disaster), war, 
                    invasion, civil unrest, government actions, labor disputes, transportation failures, fuel or energy shortages, 
                    or any other circumstances beyond our reasonable control. In such cases, performance obligations shall be 
                    suspended for the duration of the force majeure event.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default TermsAndConditions;
