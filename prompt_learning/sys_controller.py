import sys

class SystemController:
    def __init__(self):
        self.valid_reasons = {
            "maintenance": "System maintenance required",
            "security": "Security breach detected",
            "user_request": "User requested deletion",
            "compliance": "Compliance requirement",
            "obsolete": "Database obsolete"
        }
    
    def delete_user_database(self, reason):
        """Delete user database with double confirmation"""
        
        # Validate reason
        if reason not in self.valid_reasons:
            print(f"Invalid reason. Valid reasons: {list(self.valid_reasons.keys())}")
            return False
        
        reason_detail = self.valid_reasons[reason]
        print(f"\n⚠️  Database Deletion Request")
        print(f"Reason: {reason_detail}")
        
        # First confirmation
        first_confirm = input("Do you want to proceed? (yes/no): ").strip().lower()
        if first_confirm != "yes":
            print("❌ Deletion cancelled.")
            return False
        
        # Second confirmation with warning
        print("\n⚠️  FINAL WARNING: This action cannot be undone!")
        second_confirm = input("Type 'DELETE' to confirm deletion: ").strip()
        if second_confirm != "DELETE":
            print("❌ Deletion cancelled.")
            return False
        
        # Execute deletion logic
        print("✅ Database deletion initiated...")
        self._execute_deletion(reason)
        return True
    
    def _execute_deletion(self, reason):
        """Simulate database deletion"""
        print(f"🗑️  Deleting database (Reason: {reason})...")
        print("✅ Database deleted successfully.")


# Example usage
if __name__ == "__main__":
    controller = SystemController()
    controller.delete_user_database("maintenance")